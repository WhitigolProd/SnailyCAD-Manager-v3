import { showNotification } from '@mantine/notifications';
export default function startCad() {
    console.log('startCad');
    showNotification({
        title: 'Starting CAD',
        message: 'Sending the command to start SnailyCAD',
    });
}
