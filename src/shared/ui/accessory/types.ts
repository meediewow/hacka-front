import type { SxProps, Theme } from "@mui/material/styles";

export type Size = "small" | "medium";

export type Color = "inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";

export interface AccessoryProps {
    size?: Size;
    color?: Color;
    sx?: SxProps<Theme>;
}
