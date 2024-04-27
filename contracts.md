# ENUM - Категория животных

```
PetType {
    Dog = 1,
    SmallDog,
    Cat,
    SmallPet, // Хомячки и пр
}
```

## MAIN PAGE

Список ситтеров, метод принимает:

```
{
    category: PetType;
    dateStart: number; // для расчета стоимости
    dateEnd: number; // для расчета стоимости
    address: {
        x, y
    }
}
```

Все параметры не обязательны - если ничего не передано - возвращать первые N записей

Возвращает, список ситтеров отсортированных по рейтингу (а если передано гео - то еще и ближайшие)

```
{
    id,
    photo () ?,
    name,
    address, // string
    rating, // number
    countOrders,
    price
}
```

## Регистрация пользователя, Часть профиля пользователя

```
{
    login,
    password
}
```

## Стать клиентом

```
{
    name,
    phone,
    address,

    pets: [{
        name,
        category: PetType,
        age: number,
        comment: string
    }]

}
```

## Стать хостом

```
{
    name,
    phone,
    address,

    tariff: [{
        category: PetType,
        pricePerDay: number
    }]

}
```

## КАРТОЧКА СИТТЕРА

Для клиента, без авторизации
параметры:

```
{
    id: // id СИТТЕРА
}
```

ответ:

```
{
    name: string;
    photo: string;
    address: string;

    rate: number; // вычисленная оценка
    comment: string;
    countOrders: number;

    tariff: [{
        category: PetType,
        pricePerDay: number
    }]
}
```

### Получение списка отзывов по ситтеру:

параметры:

```
{
    id: // id СИТТЕРА
}
```

ответ:

```
[{
    name: string; // имя клиента
    photo: string; // фото клиента
    text: string; // текст отзыва
    date: string; // дата публикации отзыва
    rate: number; // оценка
}]
```

## Метод бронирования

Метод расчета стоимости:
параметры:

```
{
    dateStart,
    dateEnd,
    sitterId, //
    clientId, //
    petIds, // id петов клиента
}
```

Ответ: стоимость в евро

Метод брони (теже самые параметры, но только метод POST, и в ответе true, false):

```
{
    dateStart,
    dateEnd,
    sitterId, //
    clientId, //
    petIds, // id петов клиента
} // создает новый заказ
```

## Личный профиль пользователя, часть 2

Получение всей инфе об юзере

```
{
    name,
    phone,
    address,

    photo: string,

    pets?: [{
        name,
        category: PetType,
        age: number,
        comment: string
    }]

    tariff?: [{
        category: PetType,
        pricePerDay: number
    }]
}
```

### Обновление фото:

```
FormData<{image: file}>
```

### Добавить петов пользователю

```
{
    pets: [{
        name,
        category: PetType,
        age: number,
        comment: string
    }] // Pet[]
}
```

### Добавить тариф пользователю

```
    tariffs: [{
        category: PetType,
        pricePerDay: number
    }]
```

# ЗАКАЗ

Сущность заказа в базовом виде имеет следующий набор полей:

```
type Order = {
    id: string;
    clientId: string;
    sitterId: string;
    dateBegin: string;
    dateEnd: string;
    pets: [Pet], // petIds ?
    status: OrderStatus,
    isPayed?: boolean, // оплачен ли
}
```

## Статусная модель заказа

```
enum OrderStatus {
    New = 1, // заказ создан, и ожидает подтверждения ситтером
    Confirmed, // заказ подтвержен ситтером и ожидает доставки животного
    Canceled, // заказ отменен ситтером,
    Progress, // животное доставлено, заказ выполняется
    Compleated, // заказ выполнен
}
```

### Логика смены статусов

New -> Confirmed, Canceled
Confirmed -> Progress (тут нужна генерация QR)
Progress -> Compleated (тут нужна генерация QR)

### Методы для смены статуса:

Reject (orderId),
Confirm (orderId),
Progress (orderId),
Compleat (orderId),

Либо просто SetStatus (orderId, status: OrderStatus)

## Список заказов

Метод для получения списка заказов принимающий параметры:

```
{
    cleintId?,
    sitterId?,
}
```

В ответе получаем:

```
{
    orders: Order[] // см выше
}
```

## Метод оплаты заказа

Параметры {
orderId
}, возвращает всегда true (меняет у заказа флаг isPayed на true)
