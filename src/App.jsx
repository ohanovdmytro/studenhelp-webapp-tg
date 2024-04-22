import { useState, useEffect } from "react";
import "./App.css";
import { ChakraProvider, Container, Box, Button } from "@chakra-ui/react";
import { Theme } from "./components/Theme";

const WebApp = window.Telegram.WebApp;

function App() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedLabels = themes.flatMap((theme) =>
      theme.subjects.filter((subject) => selectedCheckboxes.includes(subject))
    );
    console.log(`${selectedLabels}`);
    console.log(`${WebApp}`);
  };

  const themes = [
    {
      id: 0,
      name: "Технічні",
      subjects: [
        "Автокад",
        "Автоматизація",
        "Архітектура та будівництво",
        "Будівельна механіка",
        "Будівлі та споруди",
        "Вища математика",
        "Геодезія",
        "Геометрія",
        "Гідравліка",
        "Деталі машин",
        "Дискретна математика",
        "Електроніка, електротехніка",
        "Інженерна графіка",
        "Математичний аналіз",
        "Матеріалознавство",
        "Машинобудування",
        "Метрологія",
        "Механіка",
        "Нарисна геометрія",
        "Опір матеріалів",
        "Оптимізаційні методи та моделі",
        "Охорона праці",
        "Прикладна механіка",
        "Радіотехніка",
        "Робототехніка",
        "Схемотехніка",
        "Теоретична механіка",
        "Теорія ігор",
        "Теорія ймовірності",
        "Теорія машин і механізмів",
        "Технічна механіка",
        "ТОЕ",
        "Транспортні засоби",
        "Харчові технології",
        "Чисельні методи",
      ],
    },
    {
      id: 1,
      name: "Правові",
      subjects: [
        "Авторське право",
        "Аграрне право України",
        "Адвокатура",
        "Адміністративне право",
        "Бази даних",
        "Банківське право",
        "Військове право",
        "Господарське право",
        "Екологічне право",
        "Земельне право",
        "Інтелектуальна власність",
        "Інформатика",
        "Інформаційне право",
        "Історія держави і права",
        "Конституційне право",
        "Криміналістика",
        "Кримінальне право",
        "Кримінальний процес",
        "Кримінологія",
        "Медичне право",
        "Митне право",
        "Міжнародне право",
        "Нотаріат",
        "Податкове право",
        "Поліцейська діяльність",
        "Право\\Юриспруденція",
        "Правознавство",
        "Програмування",
        "Римське право",
        "Сімейне право",
        "Теорія держави і права",
        "Торговельне право",
        "Трудове право",
        "Філософія права",
        "Фінансове право",
        "Цивільне право",
        "Цивільний процес",
        "Юридична деонтологія",
      ],
    },
    {
      id: 2,
      name: "Природні",
      subjects: [
        "Агрономія",
        "Алгебра",
        "Аналітична хімія",
        "Астрономія",
        "Атомна фізика",
        "Безпека життєдіяльності",
        "Біологія",
        "Біотехнологія",
        "Ботаніка",
        "Географія",
        "Геологія",
        "Зоологія",
        "Математика",
        "Молекулярна фізика",
        "Неорганічна хімія",
        "Органічна хімія",
        "Поверхневі явища",
        "Природознавство",
        "Статистика",
        "Фізика",
        "Фізіологія",
        "Хімія",
      ],
    },
    {
      id: 3,
      name: "Економічні",
      subjects: [
        "Адміністративний менеджмент",
        "Аналіз господарської діяльності",
        "Банк і банківські операції",
        "Банківська система",
        "Банківська справа",
        "Бізнес інформатика",
        "Бізнес планування",
        "Бухгалтерія",
        "Бухгалтерський облік та аудит",
        "Бюджетні системи",
        "Готельний менеджмент",
        "Готельно-ресторанна справа",
        "Гроші, кредит, банки",
        "Економетрика",
        "Економіка",
        "Економіка митної справи",
        "Економіка підприємства",
        "Економіка праці",
        "Економіка туризму",
        "Економічна історія",
        "Економічна теорія",
        "Економічний аналіз",
        "Інвестиції",
        "Інвестиційний аналіз",
        "Інноваційний менеджмент",
        "Комерційна діяльність",
        "Контролінг підприємства",
        "Логістика",
        "Макроекономіка",
        "Макрофінансової аналіз",
        "Маркетинг",
        "Маркетингові дослідження",
        "Менеджмент",
        "Митна справа",
        "Міжнародна економіка",
        "Міжнародні відносини",
        "Мікроекономіка",
        "Організація виробництва",
        "Підприємництво",
        "Податкова система",
        "Політекономія",
        "Публічне управління та адміністрування",
        "Регіональна економіка",
        "Світова економіка",
        "Стратегічне управління",
        "Страхування",
        "Товарознавство",
        "Торгова справа",
        "Туризм",
        "Управління персоналом",
        "Управління проектами",
        "Фінанси",
        "Фінанси підприємств",
        "Фінансовий аналіз",
        "Фінансовий менеджмент",
        "Фінансовий ринок",
      ],
    },
    {
      id: 4,
      name: "Медичні",
      subjects: [
        "Анатомія",
        "Біохімія",
        "Ветеринарія",
        "Генетика",
        "Екологія",
        "Медицина",
        "Мікробіологія",
        "Психодіагностика",
        "Стоматологія",
        "Фармакогнозія",
        "Фармакологія",
        "Фармація",
      ],
    },
    {
      id: 5,
      name: "Мови",
      subjects: [
        "Англійська",
        "Іспанський",
        "Латинська мова",
        "Німецька",
        "Польська мова",
        "Російська мова",
        "Українська мова",
        "Французький",
      ],
    },
    {
      id: 6,
      name: "Гуманітарні",
      subjects: [
        "Антична філософія",
        "Археологія",
        "Біографія",
        "Всесвітня історія",
        "Геополітика",
        "Демографія",
        "Деонтологія",
        "Дизайн",
        "Діловодство",
        "Документознавство",
        "Естетика",
        "Етика",
        "Журналістика",
        "Зарубіжна література",
        "Захист України",
        "Історія",
        "Історія архітектури",
        "Історія журналістики",
        "Історія психології",
        "Історія релігії",
        "Історія розвитку політичних вчень",
        "Історія середніх віків",
        "Історія України",
        "Конфліктологія",
        "Кулінарія",
        "Культурологія",
        "Лінгвістика",
        "Література",
        "Логіка",
        "Логопедія",
        "Мистецтво",
        "Мовознавство",
        "Музика",
        "Образотворче мистецтво",
        "Основи наукових досліджень",
        "Педагогіка",
        "Політологія",
        "Психологія",
        "Публіцистика",
        "Реклама та PR",
        "Релігія і міфологія",
        "Соціальна робота",
        "Соціологія",
        "Суспільствознавство",
        "Українська література",
        "Фізична культура",
        "Філологія",
        "Філософія",
      ],
    },
    {
      id: 7,
      name: "Комп'ютерні",
      subjects: [
        "Інформаційна безпека",
        "Інформаційні технології",
        "Кібербезпека",
        "Криптографія",
        "Штучний інтелект",
        "Excel",
        "MathCad",
        "MATLAB",
      ],
    },
  ];

  useEffect(() => {
    if (WebApp) {
      WebApp.ready();
      WebApp.Mainbutton.text = "Зберегти";
      WebApp.Mainbutton.show();
    }
  });

  const handleCheckboxChange = (subject) => {
    setSelectedCheckboxes((prevSelectedCheckboxes) => {
      if (prevSelectedCheckboxes.includes(subject)) {
        return prevSelectedCheckboxes.filter((item) => item !== subject);
      } else {
        return [...prevSelectedCheckboxes, subject];
      }
    });
  };

  const handleSubjectsSubmit = () => {
    WebApp.close;
  };

  return (
    <ChakraProvider>
      <Container>
        <Box mb={12}>Виконавець: {WebApp.initDataUnsafe?.user?.username}</Box>
        <Box>
          <form onSubmit={handleSubmit}>
            {themes.map((theme) => (
              <Theme
                key={theme.id}
                name={theme.name}
                subjects={theme.subjects}
                onCheckboxChange={handleCheckboxChange}
                selectedCheckboxes={selectedCheckboxes}
              />
            ))}

            <Button
              type="submit"
              onClick={handleSubjectsSubmit}
              mt={10}
              colorScheme="green"
            >
              Зберегти
            </Button>
          </form>
        </Box>
        {/* <Box>{`${WebApp.value?.WebApp.initDataUnsafe.user}`}</Box> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
