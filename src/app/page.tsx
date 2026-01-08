import {
  PhoneIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  StarIcon,
  KeyIcon,
  SquaresIcon,
} from "./icons";
import { basePath } from "./config";

export default function Home() {
  const phoneNumber = "+79208367592";
  const phoneFormatted = "+7 (920) 836-75-92";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const telegramLink = `https://t.me/${phoneNumber}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/door-pattern.svg')] opacity-10" />

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <ClockIcon className="h-4 w-4" />
              <span>Более 20 лет опыта</span>
            </div>

            {/* Photo */}
            <div className="mb-6 flex justify-center">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white/30 shadow-xl sm:h-44 sm:w-44">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/photo.jpg`}
                  alt="Алексей Катюшин"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Алексей Катюшин
            </h1>

            <p className="mb-2 text-xl font-medium text-amber-100 sm:text-2xl">
              Мастер по установке дверей
            </p>

            <p className="mb-8 text-lg text-amber-200">
              Профессиональный монтаж в Брянске и области
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${phoneNumber}`}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-amber-700 shadow-lg transition-all hover:bg-amber-50 hover:shadow-xl sm:w-auto"
              >
                <PhoneIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
                {phoneFormatted}
              </a>

              <div className="flex gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  WhatsApp
                </a>

                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:bg-sky-600 hover:shadow-xl"
                >
                  <TelegramIcon className="h-6 w-6" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Услуги
            </h2>
            <p className="text-lg text-slate-600">
              Качественная установка дверей любой сложности
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-600">
                <HomeIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Входные двери
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Металлические двери
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Утепленные двери
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Установка замков и фурнитуры
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Демонтаж старых дверей
                </li>
              </ul>
            </div>

            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-600">
                <WrenchScrewdriverIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Межкомнатные двери
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Распашные двери
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Раздвижные системы
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Установка наличников и доборов
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Врезка замков и петель
                </li>
              </ul>
            </div>

            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-600">
                <KeyIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Электронные замки
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Установка электронных замков
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Кодовые замки
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Замки с отпечатком пальца
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Настройка и программирование
                </li>
              </ul>
            </div>

            <div className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-600">
                <SquaresIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Монтаж плинтуса
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Напольный плинтус
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Пластиковый и деревянный
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  МДФ плинтус
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  Аккуратные стыки и углы
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Почему выбирают меня
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <ClockIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">20+ лет</h3>
              <p className="text-slate-600">Опыт работы</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <ShieldCheckIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Гарантия</h3>
              <p className="text-slate-600">На все работы</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <StarIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Качество</h3>
              <p className="text-slate-600">Аккуратный монтаж</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <WrenchScrewdriverIcon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Свой инструмент
              </h3>
              <p className="text-slate-600">Профессиональное оборудование</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-700 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Нужна установка дверей?
          </h2>
          <p className="mb-8 text-lg text-amber-100">
            Позвоните или напишите — отвечу на все вопросы и приеду на замер
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${phoneNumber}`}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-amber-700 shadow-lg transition-all hover:bg-amber-50 hover:shadow-xl sm:w-auto"
            >
              <PhoneIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
              {phoneFormatted}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl sm:w-auto"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center text-slate-400">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="mb-2 text-lg font-medium text-white">
            Алексей Катюшин
          </p>
          <p className="mb-4">Установка дверей в Брянске и области</p>
          <p className="text-sm">
            <a
              href={`tel:${phoneNumber}`}
              className="text-amber-400 hover:text-amber-300"
            >
              {phoneFormatted}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
