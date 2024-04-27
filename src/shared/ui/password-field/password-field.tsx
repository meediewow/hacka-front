import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { PasswordFieldProps } from './types';

export const PasswordField = React.forwardRef<HTMLDivElement, PasswordFieldProps>(
    function PasswordField(props, ref) {
        const [showPassword, setShowPassword] = React.useState(false);

        const onShowPassword = () => {
            setShowPassword((show) => !show);
        };

        return (
            <TextField
                {...props}
                ref={ref}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    ...props.InputProps,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                size="small"
                                onClick={onShowPassword}
                                sx={{ fontSize: 20, m: -0.313 }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        );
    }
);
