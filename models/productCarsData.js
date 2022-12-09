import EventBus from "../utils/eventBus.js";

export class ProductCarsData {
    constructor() {
        this.products = null;
    }
    fetchData() {
        fetch('/getCarSpec')
            .then((response) => {
                const {status} = response;

                if (status === 404) {
                    EventBus.emit('product-car-data:not-found', ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.']);
                    return;
                }

                if (status === 400) {
                    EventBus.emit('product-car-data:bad-request', ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.']);
                    return;
                }

                if (status === 500) {
                    EventBus.emit('product-car-data:server-error', ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.']);
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
