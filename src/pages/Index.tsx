import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={28} className="text-[#FF6B35]" />
              <span className="text-xl font-bold text-[#2C3E50]">СтройДом</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors"
              >
                О компании
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors"
              >
                Проекты
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors"
              >
                Цены
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой-секция */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Строим дома <br />
              вашей мечты
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Профессиональное жилищное строительство с гарантией качества. От
              проекта до ключей — полный цикл услуг.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-4 text-lg"
              >
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2C3E50] px-8 py-4 text-lg"
              >
                Посмотреть проекты
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* О компании */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              О компании
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 15 лет создаем качественные дома для счастливых семей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Award"
                  size={48}
                  className="text-[#FF6B35] mx-auto mb-4"
                />
                <CardTitle className="text-[#2C3E50]">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Используем только сертифицированные материалы и современные
                  технологии строительства
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Clock"
                  size={48}
                  className="text-[#FF6B35] mx-auto mb-4"
                />
                <CardTitle className="text-[#2C3E50]">Сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Соблюдаем договорные сроки и держим клиентов в курсе каждого
                  этапа строительства
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Shield"
                  size={48}
                  className="text-[#FF6B35] mx-auto mb-4"
                />
                <CardTitle className="text-[#2C3E50]">Гарантия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Предоставляем гарантию 5 лет на все виды работ и полное
                  сервисное обслуживание
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг по жилищному строительству
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon
                name="Home"
                size={48}
                className="text-[#FF6B35] mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                Строительство домов
              </h3>
              <p className="text-gray-600">
                Каркасные, кирпичные, блочные дома под ключ
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon
                name="Hammer"
                size={48}
                className="text-[#FF6B35] mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                Ремонт и отделка
              </h3>
              <p className="text-gray-600">
                Внутренняя и внешняя отделка любой сложности
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon
                name="TreePine"
                size={48}
                className="text-[#FF6B35] mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                Ландшафтный дизайн
              </h3>
              <p className="text-gray-600">
                Благоустройство территории и озеленение
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon
                name="Wrench"
                size={48}
                className="text-[#FF6B35] mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#2C3E50] mb-2">
                Инженерные системы
              </h3>
              <p className="text-gray-600">
                Отопление, водоснабжение, электричество
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              Наши проекты
            </h2>
            <p className="text-xl text-gray-600">
              Примеры реализованных объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/img/06f3a4b5-ecf3-44fa-8cc4-cff199bd7af4.jpg)",
                }}
              ></div>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">
                  Коттедж "Премиум"
                </CardTitle>
                <CardDescription>
                  Площадь: 250 м² • Срок: 8 месяцев
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Двухэтажный кирпичный дом с террасой и гаражом
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/img/4f34dabf-fd42-4e07-a3db-868a0db1a148.jpg)",
                }}
              ></div>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">Дом "Комфорт"</CardTitle>
                <CardDescription>
                  Площадь: 180 м² • Срок: 6 месяцев
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Каркасный дом с современной планировкой
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/img/e4b23fce-e7b2-48dc-afca-78be9f061c72.jpg)",
                }}
              ></div>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">Усадьба "Люкс"</CardTitle>
                <CardDescription>
                  Площадь: 320 м² • Срок: 12 месяцев
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Загородная усадьба с бассейном и баней
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Цены */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
              Цены на строительство
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center text-[#2C3E50]">
                  Эконом
                </CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-[#FF6B35]">
                    от 25 000
                  </span>
                  <span className="text-gray-600"> ₽/м²</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Каркасная технология
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Базовая отделка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Стандартные материалы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Гарантия 2 года
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            <Card className="relative border-[#FF6B35] border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm">
                  Популярный
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-[#2C3E50]">
                  Стандарт
                </CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-[#FF6B35]">
                    от 35 000
                  </span>
                  <span className="text-gray-600"> ₽/м²</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Кирпичная кладка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Качественная отделка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Утепление фасада
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Гарантия 5 лет
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center text-[#2C3E50]">
                  Премиум
                </CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-[#FF6B35]">
                    от 50 000
                  </span>
                  <span className="text-gray-600"> ₽/м²</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Элитные материалы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Дизайнерская отделка
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Умный дом
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Гарантия 10 лет
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 bg-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-300">Готовы обсудить ваш проект?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    size={20}
                    className="text-[#FF6B35] mr-4"
                  />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-[#FF6B35] mr-4" />
                  <span>info@stroydom.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-[#FF6B35] mr-4"
                  />
                  <span>г. Москва, ул. Строительная, д. 15</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    size={20}
                    className="text-[#FF6B35] mr-4"
                  />
                  <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Оставьте заявку</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#FF6B35]"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#FF6B35]"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#FF6B35] resize-none"
                ></textarea>
                <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white py-3">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#1a252f] text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Building2" size={24} className="text-[#FF6B35]" />
              <span className="text-lg font-semibold">СтройДом</span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2024 СтройДом. Все права защищены.</p>
              <p className="text-sm text-gray-400">
                Лицензия на строительство №123456
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
