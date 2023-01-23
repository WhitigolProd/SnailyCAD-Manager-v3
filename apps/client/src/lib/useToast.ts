import toast, {
    Toaster,
    ToastOptions,
    CheckmarkIcon,
    ErrorIcon,
    ToastIcon,
} from 'react-hot-toast';

const defaults: {
    [key: string]: ToastOptions;
} = {
    success: {
        style: {
            backgroundColor: '#48bb78',
            color: '#fff',
        },
        position: 'bottom-left',
    },
    error: {
        style: {
            backgroundColor: '#e53e3e',
            color: '#fff',
        },
        position: 'bottom-left',
    },
    warning: {
        style: {
            backgroundColor: '#ed8936',
            color: '#fff',
        },
        position: 'bottom-left',
    },
    info: {
        style: {
            backgroundColor: '#4299e1',
            color: '#fff',
        },
        position: 'bottom-left',
    },
};

export const useToast = {
    success: (message: string, options?: ToastOptions) => {
        toast(message, {
            ...defaults['success'],
            ...options,
        });
    },
    error: (message: string, options?: ToastOptions) => {
        toast(message, {
            ...defaults['error'],
            ...options,
        });
    },
    warning: (message: string, options?: ToastOptions) => {
        toast(message, {
            ...defaults['warning'],
            ...options,
        });
    },
    info: (message: string, options?: ToastOptions) => {
        toast(message, {
            ...defaults['info'],
            ...options,
        });
    },
};
