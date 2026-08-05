# MyPortfolio

[![Vue](https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)](https://vite.dev/)

**MyPortfolio** — интерактивное портфолио разработчика, выполненное в формате цифрового инженерного интерфейса. Проект представляет собой одностраничное резюме, разработанное на Vue 3 и TypeScript, с использованием GSAP для анимации интерфейса и Puppeteer для автоматической генерации PDF-версии.

---

## Демонстрация

Проект доступен в браузере, а также в виде автоматически сгенерированной PDF-версии.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Portfolio-222222?logo=github)](https://felixzeves.github.io/MyPortfolio/)

[![PDF](https://img.shields.io/badge/PDF-Resume-red?logo=adobeacrobatreader)](https://felixzeves.github.io/MyPortfolio/portfolio.pdf)

---

## Технологический стек

### Frontend

- Vue 3
- TypeScript
- Vite
- Quasar Framework
- Tailwind CSS
- GSAP

### Backend

- Node.js
- Fastify
- Puppeteer
- dotenv

### Инструменты

- GitHub Actions
- GitHub Pages
- npm-run-all
- concurrently

### Требования

- Node.js **22.18+**
- npm **10+**

---

## Ключевые особенности

- Одностраничное интерактивное портфолио
- Индустриальный стиль пользовательского интерфейса
- Анимированные переходы между разделами
- Интерактивная секция проектов
- Экспорт портфолио в PDF
- Поддержка статического и серверного режима генерации PDF
- Автоматическая генерация PDF при сборке проекта
- Автоматическая публикация проекта на GitHub Pages

---

## Рекомендуемая среда разработки

### IDE

- Visual Studio Code
- Vue - Official (Volar)

Если установлен **Vetur**, рекомендуется отключить его во избежание конфликтов с Volar.

### Браузеры

Для разработки рекомендуется установить **Vue Devtools**.

**Chromium**

- Vue Devtools
- Включить Custom Object Formatter

**Firefox**

- Vue Devtools
- Включить Custom Object Formatter

---

## Поддержка TypeScript

Для проверки типов Vue-компонентов используется `vue-tsc`.

Стандартный компилятор TypeScript (`tsc`) не поддерживает обработку файлов `.vue`, поэтому рекомендуется использовать расширение **Vue - Official (Volar)**.

---

## Структура проекта

```text
src/
├── assets/        # изображения и статические ресурсы
├── components/    # Vue-компоненты
├── composables/   # переиспользуемая логика
├── config/        # конфигурация фрагментов приложения
├── types/         # TypeScript-типы
└── utils/         # вспомогательные функции

server/
└── index.ts       # сервер генерации PDF
```

---

## Установка

```bash
npm install
```

---

## Скрипты

| Команда | Назначение |
|---------|------------|
| `npm run dev` | Запуск Vite в режиме разработки |
| `npm run dev:pdf` | Запуск Vite и сервера генерации PDF |
| `npm run type-check` | Проверка типов TypeScript |
| `npm run build` | Production-сборка |
| `npm run preview` | Просмотр production-сборки |
| `npm run pdf-server` | Запуск сервера генерации PDF |
| `npm run ci` | Полная проверка проекта (type-check + production build) |
| `npm run ci:pdf` | Production-сборка и запуск окружения для тестирования генерации PDF |


---

## Работа с PDF

Проект поддерживает два режима генерации PDF.

### Статический режим

Статический режим рекомендуется для публикации на GitHub Pages.

Используется заранее подготовленный PDF-файл.

```env
PDF_MODE=static
PDF_FILE=portfolio.pdf
```

В этом режиме приложение скачивает опубликованный PDF без обращения к серверу.

### Серверный режим

Серверный режим предназначен для локальной разработки и CI/CD.

Используется Node.js и Puppeteer для динамической генерации документа.

```env
PDF_MODE=server
```

---

## Статический деплой

Проект подготовлен для публикации на GitHub Pages.

При сборке необходимо корректно указать параметр `base` в конфигурации Vite. После выполнения production-сборки содержимое каталога `dist/` может быть опубликовано на любом статическом хостинге.

```bash
npm run build
```

После сборки содержимое директории `dist/` может быть опубликовано на любом статическом хостинге, включая GitHub Pages.

---

## Использование

Проект опубликован исключительно в демонстрационных целях и служит персональным портфолио автора.

Использование исходного кода, дизайна и графических материалов в качестве основы для собственного портфолио или коммерческих проектов допускается только с разрешения автора.