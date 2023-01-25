const useCustomLog = {
    success: (message: string) => {
        console.log(
            `%c[ Success: ] %c${message}`,
            'color: green; font-weight: bold;',
            ''
        );
    },
    error: (message: string) => {
        console.log(
            `%c[ Error: ] %c${message}`,
            'color: red; font-weight: bold;',
            ''
        );
    },
    info: (message: string) => {
        console.log(
            `%c[ Info: ] %c${message}`,
            'color: cyan; font-weight: bold;',
            ''
        );
    },
    warning: (message: string) => {
        console.log(
            `%c[ Warning: ] %c${message}`,
            'color: yellow; font-weight: bold;',
            ''
        );
    },
};

export default useCustomLog;
