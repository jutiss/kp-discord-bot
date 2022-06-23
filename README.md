Бот ведения списка фильмов для просмотра в Discord с подгрузкой информации о фильме с КиноПоиска.

За основу взято неофициальное API от [kinopoiskapiunofficial.tech](https://kinopoiskapiunofficial.tech)

Для запуска достаточно заполнить **все** переменные в .env (подсмотреть можно в .env.example) и поднять контейнер через ``docker-compose up``.

Не забудьте натянуть миграции, выполнив в контейнере ``npx prisma migrate deploy``.
