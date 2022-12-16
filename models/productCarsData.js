import EventBus from "../utils/eventBus.js";

export class ProductCarsData {
    constructor() {
        this.products = null;
    }
    fetchData() {
        fetch('/api/getCarsSpec')
            .then((response) => {
                const {status} = response;

                if (status === 404) {
                    EventBus.emit('product-car-data:not-found', {title:'Ошибка 404', description: 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.'});
                    return;
                }

                if (status === 400) {
                    EventBus.emit('product-car-data:bad-request', {title: 'Ошибка 400', description: 'Вы ввели некорректный запрос, проверьте данные.'});
                    return;
                }

                if (status === 500) {
                    EventBus.emit('product-car-data:server-error', {title: 'Ошибка 500', description: 'Ошибка обращения к сервису. Попробуйте обновить страницу.'});
                    return;
                }

                return response.json();
            })

            .then((data) => {
                this.products = data;
                EventBus.emit('product-car-data:got-data', data);
            })
    }
}
