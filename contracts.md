# ENUM - Категория животных

```
PetType = {
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

## Добавить петов пользователю

```
{
    pets: [{
        name,
        category: PetType,
        age: number,
        comment: string
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
