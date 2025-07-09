import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-300 to-blue-600">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="Cog" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">UniMice</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Icon name="Users" size={16} className="mr-2" />
              Игроки
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Discord
            </Button>
          </nav>
          <Button className="bg-white text-blue-600 hover:bg-white/90">
            Подключиться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              UniMice
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Minecraft Server с модом Create
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Погрузитесь в мир механизмов и автоматизации! Создавайте
              невероятные машины, стройте фабрики и исследуйте безграничные
              возможности мода Create.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 px-8 py-3"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 px-8 py-3"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать моды
              </Button>
            </div>

            {/* Server Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="text-center">
                  <Icon
                    name="Users"
                    size={32}
                    className="mx-auto mb-2 text-white"
                  />
                  <CardTitle>Онлайн игроков</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-center">24/100</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="text-center">
                  <Icon
                    name="Clock"
                    size={32}
                    className="mx-auto mb-2 text-white"
                  />
                  <CardTitle>Аптайм</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-center">99.9%</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="text-center">
                  <Icon
                    name="Zap"
                    size={32}
                    className="mx-auto mb-2 text-white"
                  />
                  <CardTitle>Версия</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-center">1.20.1</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/img/a922108b-181c-4af6-b83c-5fbe74e72eb3.jpg"
            alt="UniMice Create Server"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Все, что нужно знать о нашем сервере с модом Create
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <Icon name="Cog" size={24} className="mr-3 text-blue-600" />
                    <span className="text-lg font-semibold">
                      Что такое мод Create?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Create — это мод для Minecraft, который добавляет механизмы,
                    конвейеры, шестерни и множество других элементов для
                    создания сложных автоматических систем. Вы можете строить
                    фабрики, поезда, мельницы и многое другое!
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <Icon
                      name="Download"
                      size={24}
                      className="mr-3 text-blue-600"
                    />
                    <span className="text-lg font-semibold">
                      Как установить моды для игры?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Для игры на нашем сервере вам понадобится Forge 1.20.1 и мод
                    Create. Скачайте их с официальных источников, установите
                    Forge, затем поместите файл мода в папку mods. Подробная
                    инструкция доступна в нашем Discord.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <Icon
                      name="Shield"
                      size={24}
                      className="mr-3 text-blue-600"
                    />
                    <span className="text-lg font-semibold">
                      Есть ли защита территорий?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Да! На сервере установлена система защиты территорий. Каждый
                    игрок может приватить свою территорию с помощью команды
                    /claim. Ваши постройки и механизмы будут полностью защищены
                    от других игроков.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <Icon name="Zap" size={24} className="mr-3 text-blue-600" />
                    <span className="text-lg font-semibold">
                      Какие есть ограничения на сервере?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Сервер настроен для комфортной игры всех участников. Есть
                    ограничения на количество сущностей в чанке для
                    предотвращения лагов. Запрещены дюпы и использование багов.
                    PvP разрешено только в специальных зонах.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <Icon
                      name="MessageCircle"
                      size={24}
                      className="mr-3 text-blue-600"
                    />
                    <span className="text-lg font-semibold">
                      Как получить помощь?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Присоединяйтесь к нашему Discord серверу для общения с
                    администрацией и другими игроками. Также вы можете
                    использовать команду /help в игре или обратиться к
                    администратору через /mail.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Правила сервера
            </h2>
            <p className="text-lg text-white/90 mb-12">
              Соблюдение правил обеспечивает комфортную игру для всех
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Users" size={24} className="mr-3" />
                    Общение и поведение
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/90 space-y-3">
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 mt-1 text-green-300"
                    />
                    <span>Уважительное общение с игроками</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="X"
                      size={16}
                      className="mr-2 mt-1 text-red-300"
                    />
                    <span>Запрещены оскорбления и токсичность</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="X"
                      size={16}
                      className="mr-2 mt-1 text-red-300"
                    />
                    <span>Спам в чате недопустим</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 mt-1 text-green-300"
                    />
                    <span>Помощь новичкам приветствуется</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Gamepad2" size={24} className="mr-3" />
                    Игровой процесс
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/90 space-y-3">
                  <div className="flex items-start">
                    <Icon
                      name="X"
                      size={16}
                      className="mr-2 mt-1 text-red-300"
                    />
                    <span>Запрещены читы и модификации</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="X"
                      size={16}
                      className="mr-2 mt-1 text-red-300"
                    />
                    <span>Дюпы и баги использовать нельзя</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 mt-1 text-green-300"
                    />
                    <span>PvP только в разрешенных зонах</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 mt-1 text-green-300"
                    />
                    <span>Автоматизация приветствуется</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Home" size={24} className="mr-3" />
                    Строительство
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/90 space-y-3">
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 mt-1 text-green-300"
                    />
                    <span>Стройте только на своей территории</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="X"
                      size={16}
                      className="mr-2 mt-1 text-red-300"
                    />
                    <span>Не портите чужие постройки</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 mt-1 text-green-300"
                    />
                    <span>Убирайте за собой ресурсы</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 mt-1 text-green-300"
                    />
                    <span>Красивые постройки поощряются</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Icon name="Shield" size={24} className="mr-3" />
                    Наказания
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/90 space-y-3">
                  <div className="flex items-start">
                    <Icon
                      name="AlertTriangle"
                      size={16}
                      className="mr-2 mt-1 text-yellow-300"
                    />
                    <span>Предупреждение за первое нарушение</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Clock"
                      size={16}
                      className="mr-2 mt-1 text-orange-300"
                    />
                    <span>Временный бан за повторные нарушения</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Ban"
                      size={16}
                      className="mr-2 mt-1 text-red-300"
                    />
                    <span>Перманентный бан за серьезные нарушения</span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="MessageCircle"
                      size={16}
                      className="mr-2 mt-1 text-blue-300"
                    />
                    <span>Апелляции принимаются в Discord</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 px-8 py-3"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Присоединиться к Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">UniMice Server</h3>
              <p className="text-gray-400">
                Лучший сервер Minecraft с модом Create. Создавайте невероятные
                механизмы и наслаждайтесь игрой!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Подключение</h4>
              <div className="space-y-2">
                <p className="text-gray-400">IP: play.unimice.ru</p>
                <p className="text-gray-400">Версия: 1.20.1 Forge</p>
                <p className="text-gray-400">Мод: Create + дополнения</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-400 hover:bg-gray-800"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Discord
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-400 hover:bg-gray-800"
                >
                  <Icon name="Globe" size={16} className="mr-2" />
                  Сайт
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 UniMice Server. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
