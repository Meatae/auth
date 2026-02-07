# Google Auth Demo

Простая страница авторизации через Google OAuth.

## Настройка

1. Открой `index.html`
2. Замени `YOUR_GOOGLE_CLIENT_ID` в файле `app.js` на твой реальный Client ID
3. Также замени в `index.html` в `data-client_id` атрибуте

## Запуск локально

```bash
python3 -m http.server 8080
```

Открой: http://localhost:8080

## Деплой на Vercel

1. Заливаешь на GitHub
2. Подключаешь репозиторий в Vercel
3. В Google Cloud Console добавляешь новый redirect URI:
   `https://your-project.vercel.app`

## Файлы

- `index.html` — главная страница
- `styles.css` — стили
- `app.js` — логика авторизации
