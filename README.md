Задача: Разработать сервис конвертации валют на Node.JS, на фреймворке Express или Koa.

Сервис должен уметь:
* Собирать и парсить данные, как минимум, из одного указанного источника;
* Иметь REST API для приема HTTP запросов, закрытое авторизацией. (Без GUI.):
* Запрос списка курсов ЦБ определенной страны;
* Запрос на конвертацию из одной валюты в другую. В запросе должно быть можно указать страну, ЦБ которой выступит источником курсов. Если страна не указана, то берется страна по умолчанию.

Источники курсов:
1. ЦБ Тайланда: https://apiportal.bot.or.th/bot/public/node/503, API KEY: c2bbe063-d0ff-456c-bc08-fbd5115fb340. Принимает до 200 запросов в день.
2. ЦБ России: http://www.cbr.ru/scripts/XML_daily.asp

Важные моменты:
- При разработке архитектуры сервиса учесть, что может быть добавлена еще одна страна со своим ЦБ в качестве источника данных, при этом формат данных может отличаться от xml, например json;
- Учесть, что источники курсов могут иметь ограничение на количество запросов в секунду, что при большом количестве обращений к сервису потенциально делает невозможным real-time получение курсов по факту запроса на конвертацию.

Выполненное задание необходимо разместить в публичном репозитории, снабдив README.md файлом, с описанием процедуры установки/запуска. Также описать API сервиса в отдельном файле.