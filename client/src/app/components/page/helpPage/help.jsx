import React from "react";
import Footer from "../../common/footer";
import HeaderMenu from "../../common/headerMenu";
import styles from "./helpPage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import Breadcrumps from "../../common/breadcrumps";

const HelpPage = () => {
  function scrollTo(name) {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.helpPage}>
          <div className={styles.BreadCrumps}>
                <Breadcrumps/>
                </div>
            <h1 className={styles.helpPage_header}>
              Основные инструменты для художественной татуировки
            </h1>
            <p className={styles.helpPage_header_info}>
              Итак, вы решили заняться набивкой художественной татуировки. Дикие
              методы, вроде струны и пасты из ручки вы, как разумный человек, не
              рассматриваете, и осознаете, что вам потребуется какой-то
              минимальный набор оборудования. Что в нем должно быть? Этим
              задаются все начинающие тату-мастера на заре своей деятельности.
              Попробуем помочь.
            </p>
            <a></a>
            <ul className={styles.helpPage_header_info + " " + styles.list}>
              <li className={styles.helpPage_header_info_item}><a className={styles.helpPage_infoRef} to="place-name" onClick={() => scrollTo("place-name") }>Как правильно выбрать место для ТАТУ</a></li>
              <li className={styles.helpPage_header_info_item}><a className={styles.helpPage_infoRef} to="style-name" onClick={() => scrollTo("style-name")}>Как выбрать стиль тату для девушек и мужчин</a></li>
              <li className={styles.helpPage_header_info_item}><a className={styles.helpPage_infoRef} to="paint-name" onClick={() => scrollTo("paint-name")}>Как выбрать эскиз по характеру для мужчин и для девушки</a></li>
              <li className={styles.helpPage_header_info_item}><a className={styles.helpPage_infoRef} to="tattoo-name" onClick={() => scrollTo("tattoo-name")}>Как выбрать татту по знаку зодиака</a></li>
              <li className={styles.helpPage_header_info_item}><a className={styles.helpPage_infoRef} to="machines-name" onClick={() => scrollTo("machines-name")}>Виды татту машинок</a></li>
              <li className={styles.helpPage_header_info_item}><a className={styles.helpPage_infoRef} to="FAQ-name" onClick={() => scrollTo("FAQ-name")}>Частые вопросы</a></li>
              <li className={styles.helpPage_header_info_item}><a className={styles.helpPage_infoRef} to="choice-name" onClick={() => scrollTo("choice-name")}>Какие бывают тату машинки?</a></li>
              <li className={styles.helpPage_header_info_item}><a className={styles.helpPage_infoRef} to="inductione-name" onClick={() => scrollTo("inductione-name")}> Виды индукционных тату машинок</a></li>
              <li className={styles.helpPage_header_info_item}> <a className={styles.helpPage_infoRef} to="rotor-name" onClick={() => scrollTo("rotor-name")}>Роторные тату машинки </a></li>
            </ul>
            <h1 className={styles.helpPage_header}>Что такое тату-машинка</h1>
            <p className={styles.helpPage_header_info}>
              Основной инструмент тату-мастера, с которого, как правило,
              начинают комплектовать свой первый набор тату-оборудования. Не
              будем менять этот стереотип, и расскажем о машинках. Машинки, по
              принципу работы, делятся на индукционные и роторные. Индукционные,
              в свою очередь, делятся на лайнеры и шейдеры. Тату-машинка —
              электрическое устройство приводящее в движение тату-иглу.
              Независимо от типа, к тату-машинке предъявляются следующие
              требования:
            </p>
            <ul className={styles.helpPage_header_info + " " + styles.list}>
              <li className={styles.helpPage_header_info_item}>
                {" "}
                Малый вес — лёгкой машинкой удобнее работать;
              </li>
              <li className={styles.helpPage_header_info_item}>
                {" "}
                Минимум вибраций — такой машинкой проще делать точные рисунки;
              </li>
              <li className={styles.helpPage_header_info_item}>
                {" "}
                Мощность — прокалывать кожу с частотой несколько десятков ударов
                в секунду не так-то просто;
              </li>
              <li className={styles.helpPage_header_info_item}>
                {" "}
                Качественная сборка — тату-машшинки подвергаются немалым
                нагрузкам, и должны их переносить продолжительное время;
              </li>
              <li className={styles.helpPage_header_info_item}>
                {" "}
                Надёжность — под этим следует понимать не только склонность той
                или иной модели к поломкам, а возможность работать длительное
                время без перегрева и проседания характеристик;
              </li>
              <li className={styles.helpPage_header_info_item}>
                {" "}
                Красивый внешний вид — это не столь маловажно,как кажется.
              </li>
            </ul>
            <p className={styles.helpPage_header_info}>
              Если вам не чужда механика и вы понимаете принципы работы
              несложных механизмов, то видите, что требования весьма
              противоречивы. Обеспечить минимум вибраций и максимум мощности
              проще на устройстве с большей массой — но работать тяжёлой
              машинкой не так-то просто. Сюда же можно отнести и качество
              сборки, и конструкции в целом — вибрация оказывает разрушающее
              воздействие на все элементы устройства. Найти тот баланс, который
              понравится большинству тату-мастеров — и есть искусство
              производителя. Найти те модели, которыми легко, удобно и комфортно
              работать — задача тату-мастера.
            </p>
            <div className={styles.blockImageInfo}></div>
            <h1 className={styles.helpPage_header} name="place-name">
              Как правильно выбрать место для ТАТУ
            </h1>
            <p className={styles.helpPage_header_info}>
              Выбирать место для нательного рисунка необходимо ответственно и
              лучше всего, если в этом поможет мастер. Опытный художник
              подскажет, насколько выигрышно будет смотреться выбранный эскиз на
              том или ином месте. Необходимо определиться, хотите ли
              демонстрировать рисунок окружающим или предпочитаете скрывать его
              от посторонних глаз под одеждой.
            </p>
            <h3 className={styles.helpPage_headerSubtitle}>
              Как выбрать место для татуировки мужчинам и девушкам – основные
              рекомендации:
            </h3>
            <ul className={styles.helpPage_header_info + " " + styles.list}>
              <li className={styles.helpPage_header_info_item}>
                Плечо и бицепс. Это очень популярные участки, на которые можно
                набить как маленькие рисунки, так и габаритные композиции,
                переходящие на грудь, спину, руку.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Предплечье. Популярное место для нанесения мужских и женских
                татуировок, благодаря невысокой болезненности процедуры,
                возможности спрятать рисунок под одеждой с длинным рукавом. На
                это место можно нанести мотивационные или памятные надписи.
                Популярный вариант – набивка тату-рукава от запястья до плеча.
                Этот участок можно выбрать для нанесения первой тату.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Запястье и лодыжка. Эти зоны любят украшать представительницы
                прекрасного пола птичками, насекомыми, браслетами и цепочками с
                подвесками.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Кисти рук и пальцы. Нанесение изображений на эти места могут
                себе позволить только люди творческих профессий, которым нет
                необходимости соблюдать дресс-код.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Шея. Задняя часть шеи – популярный вариант среди девушек и
                женщин, которые могут скрыть рисунок под волосами на работе и
                показать его окружающим, сделав высокую прическу. Мужчины чаще
                выбирают боковые и переднюю зоны шеи.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Спина. Это место предпочитают желающие нанести масштабные
                композиции или парные сюжеты в виде крыльев, животных и птиц.
                Следует помнить, что набивка тату на позвоночник – процесс
                достаточно болезненный. Женщины часто выбирают для нанесения
                рисунка поясницу. Изображение, расположенное на этом месте,
                придает женскому образу шарм и кокетливость.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Грудь. Ее часто выбирают мужчины для набивки композиций, которые
                могут распространяться на плечо, руку, живот, бока. Женщины
                редко набивают тату на бюст, поскольку это может создать
                определенные проблемы при грудном вскармливании.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Живот. Этот участок для нанесения татуировки выбирают только
                люди, которые уделяют постоянное внимание своей физической форме
                и могут похвастаться стальным прессом. Женщины могут набить
                рисунок, чтобы скрыть шрам от кесарева сечения.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Бедра. Это место, подходящее для нанесения женских тату.
                Правильно выбранный сюжет может уменьшить объем бедер, сделать
                их визуально стройнее.
              </li>
              <div className={styles.imageBox}>
                <div className={styles.blockImageInfo_femalethree}></div>
              </div>
              <li className={styles.helpPage_header_info_item}>
                Голень. Тату набивают на передней, наружной боковой и задней
                частях голени. При выборе эскиза необходимо позаботиться, чтобы
                рисунок подчеркивал стройность ног.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Голова. Это место является очень болезненным для нанесения
                татуировок. Набивку тату на голове можно доверить только очень
                опытному мастеру. Следует помнить, что такое изображение требует
                частого бритья.
              </li>
            </ul>
            <h1 className={styles.helpPage_header} name="style-name">
              Как выбрать стиль тату для девушек и мужчин
            </h1>
            <p className={styles.helpPage_header_info}>
              Прежде чем обратиться в тату-салон для набивки татуировки,
              необходимо выбрать стиль, в котором она будет сделана. Популярные
              направления:
            </p>

            <ul className={styles.helpPage_header_info + " " + styles.list}>
              <li className={styles.helpPage_header_info_item}>
                Гравюра. Техника создания гравюр созвучна с процессом нанесения
                татуировки. Рисунок выглядит четко, крупные цветные элементы и
                размытые контуры при его создании не применяются. Чаще всего
                тату-гравюры выполняются в черно-белом виде. Популярные эскизы
                тату, набиваемых в этой технике, – средневековые и библейские
                сюжеты, мифические чудовища, животные.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Биомеханика. Этот стиль возник сравнительно недавно. Его
                выбирают мужчины и девушки, желающие впечатлить окружающих.
                Отличительная черта биомеханики – симбиоз человеческой плоти,
                металлических труб и сложных механизмов. Рисунки, выполненные в
                3D технике, смотрятся пугающе реалистично.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Реализм. Этот стиль считается одним из наиболее тяжелых в
                исполнении, поэтому такие тату качественно могут набить только
                опытные художники. Основой таких сюжетов служат фотографии
                близких людей, медийных личностей, героев фильмов.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Чикано. Раньше тату в этом стиле набивали в основном
                представители преступного мира. Сегодня их выбирают обычные
                люди, просто желающие украсить свое тело. Наиболее
                распространенные сюжеты – образы Иисуса Христа, Девы Марии и
                других святых.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Олд скул и нью скул. Олд скул («старая школа») – популярный
                сегодня стиль, основателями которого считаются моряки. Чаще
                всего в тату олд скул присутствуют – якорь, ласточка, сердце,
                роза, кинжал, карты, деньги. Продолжением и развитием этого
                стиля служит нью скул («новая школа»). В рисунках «новой школы»
                присутствует много фантазии и юмора. Изображения обычно
                выполняют яркими красками, а для их обрамления используют четкие
                контуры. Сюжеты нью скул часто пересекаются с сюжетами комиксов,
                мультфильмов, фантастических книг.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Дотворк. Это легко узнаваемый стиль, название которого
                переводится как «работа точками». Рисунки в стиле дотворк должны
                быть масштабными, иначе смысл точечной работы будет утерян.
                Эскизы обычно набивают в черном цвете.
              </li>
              <Swiper
                spaceBetween={1}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_imageBox + " " + styles.hand}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_imageBox + " " + styles.handtwo}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_imageBox + " " + styles.handthree}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_imageBox + " " + styles.handfour}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_imageBox + " " + styles.handfive}></div>{" "}
                </SwiperSlide>
              </Swiper>
              <li className={styles.helpPage_header_info_item}>
                Блэкворк. Этот стиль подразумевает нанесение на большие участки
                только черной краски. Его обычно выбирают мужчины. Чаще всего
                блэкворк сочетают с другими стилями.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Акварель. Это прекрасный выбор для утонченных и романтичных
                натур. Однако следует помнить, что такие рисунки, выполненные в
                нежных цветах, не очень долговечны, поэтому требуют частых
                корректировок.
              </li>
            </ul>
            <h1 className={styles.helpPage_header} name ="paint-name">
              Как выбрать эскиз по характеру для мужчин и для девушки
            </h1>
            <p className={styles.helpPage_header_info}>
              Сюжеты и цветовые решения тату должны отражать характер своего
              владельца. Например, изображения с острыми углами и прямыми
              линиями обычно выбирают своенравные люди, не привыкшие
              прислушиваться к чужому мнению. Преобладание в эскизе плавных и
              кривых линий свидетельствует о мягкости характера человека.
            </p>
            <p className={styles.helpPage_header_info}>
              При выборе цветов следует помнить, что:
            </p>
            <ul className={styles.helpPage_header_info + " " + styles.list}>
              <li className={styles.helpPage_header_info_item}>
                Красный – придает энергию, улучшает настроение, но может усилить
                напряжение;
              </li>
              <li className={styles.helpPage_header_info_item}>
                Желтый – способствует раскрытию творческого потенциала;
              </li>
              <li className={styles.helpPage_header_info_item}>
                Синий – успокаивает;
              </li>
              <li className={styles.helpPage_header_info_item}>
                Зеленый – обеспечивает чувство комфорта и безопасности.
              </li>
            </ul>
            <h1 className={styles.helpPage_header} name="tattoo-name">
              Как выбрать татту по знаку зодиака
            </h1>
            <p className={styles.helpPage_header_info}>
              Астрологи считают, что представители каждого зодиакального
              созвездия обладают определенными чертами. Поэтому мужчины и
              девушки, которые хотят выбрать тату со смыслом, должны учитывать
              свой знак зодиака:{" "}
            </p>
            <ul className={styles.helpPage_header_info + " " + styles.list}>
              <li className={styles.helpPage_header_info_item}>
                Овны. Уверенные, смелые и предприимчивые. Часто выбирают
                татуировки, нанесенные на видные места тела. Сюжеты обычно
                связаны с движением, действиями, победами.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Близнецы. Быстрые, решительные, следующие за новыми веяниями.
                Начав делать тату, редко останавливаются на одном рисунке. Часто
                выбирают парные эскизы, отражающие двойственность их натуры.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Раки. Ориентированы на дом, семью. Поэтому предпочитают сюжеты,
                связанные с фамильным древом, гербом, памятными датами.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Львы. Страстные натуры. Часто набивают изображение головы льва
                или зверя полностью.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Девы. Внутренне очень глубокие люди. Все выбираемые ими рисунки
                имеют особое значение.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Весы. Часто выбирают сюжеты по их внешней привлекательности.
                Любят изображения цветов, красивых птиц, витиеватые надписи.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Скорпионы. Это люди-максималисты. Поэтому они либо не делают
                татуировок вообще, либо могут набить их на все тело.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Стрельцы. Деловые и предприимчивые люди. Часто в нательных
                рисунках отображают страсть к путешествиям, переменам.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Козероги. Предпочитают мотивирующие изображения или надписи.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Водолеи. Это самый нетрадиционный знак зодиака. Его
                представителям трудно выбрать готовый эскиз, поэтому они рисуют
                его самостоятельно или заказывают мастеру.
              </li>
              <li className={styles.helpPage_header_info_item}>
                Рыбы. Чувственные натуры. Часто наносят имена партнеров или их
                изображения.
              </li>
            </ul>

            <h1 className={styles.helpPage_header} name="machines-name">
              Виды татту машинок
            </h1>
            <div className={styles.blockImageInfo_machinesInfo}>
              <div className={styles.blockImageInfo_machinesInfo_text}>
                <h1 className={styles.helpPage_btn}>Виды тату машинок.</h1>
                <h1 className={styles.helpPage_btn}>Какую выбрать?</h1>
                <p
                  className={
                    styles.helpPage_header_info + " " + styles.textColor
                  }
                >
                  Как правильно выбрать тату машинку, с которой будет комфортно
                  работать и на что стоит обратить внимание прежде всего?
                  Разбираемся в важных особенностях всех видов тату машинок.
                </p>
              </div>
              <Link to={"./catalog/machines"}>
                {" "}
                <button className={styles.helpPage_button}>
                  КУПИТЬ ТАТУ МАШИНКУ
                </button>
              </Link>
            </div>
            <p className={styles.helpPage_header_info}>
              За огромным разнообразием татуировок стоит широкий спектр тату
              оборудования, и каждый тату мастер знает, что определяющую роль в
              результате играет именно тату машинка. Тем не менее, главной
              остается проблема, как выбрать такую машинку для тату, работа с
              которой станет максимально комфортной и эффективной. Поэтому важно
              знать, какие виды тату машинок существуют на современном рынке и в
              чем их отличия.
            </p>
            <h3 className={styles.helpPage_header} name="FAQ-name">Частые вопросы:</h3>
            <ul className={styles.helpPage_header_info + " " + styles.list}>
              <li className={styles.helpPage_header_info_item}>
                Почему важно правильно выбрать «свою» тату машинку?
              </li>
              <li className={styles.helpPage_header_info_item} >
                Какие бывают тату машинки?
              </li>
              <li className={styles.helpPage_header_info_item}>
                Индукционные тату машинки: назначение и принцип работы
              </li>
              <li className={styles.helpPage_header_info_item}>
                Какие у них есть виды?
              </li>
              <li className={styles.helpPage_header_info_item}>
                Роторные тату машинки
              </li>
              <li className={styles.helpPage_header_info_item}>
                Виды роторных тату машинок
              </li>
              <li className={styles.helpPage_header_info_item}>
                Чек-лист при выборе тату машинки
              </li>
            </ul>
            <h1 className={styles.helpPage_headerSubtitle}>
              Почему важно правильно выбрать «свою» тату машинку?
            </h1>
            <p className={styles.helpPage_header_info}>
              Выбор тату машинки — это всегда путь проб и ошибок. Проходя его,
              важно убедиться, что выбранная вами машина полностью вам подходит:
              вам комфортно с ней работать, она выполняет все поставленные вами
              задачи и делает это качественно. И особенно важно помнить, что это
              не только ваше удобство, но и ответственность за здоровье кожи
              ваших клиентов, а значит относиться к выбору тату машинки нужно в
              особым вниманием и ответственностью. Каждому тату мастеру важно
              найти «свою» тату машинку, так как бок-о-бок с ней вам предстоит
              пройти немало долгих сеансов, и если что-то во время работы будет
              вас смущать, извлечь из процесса максимум потенциала вы не
              сможете. Так что обращайте внимание на каждую деталь и тестируйте
              разные виды тату машинок — как индукционные, так и роторные. Но
              для начала внимательно изучите и те, и другие.
            </p>
          </div>
          <div className={styles.blockImageInfo_machinesChoice}></div>
          <h1 className={styles.helpPage_header} name="choice-name">
            Какие бывают тату машинки?
          </h1>
          <p className={styles.helpPage_header_info}>
            Прежде чем перейти к классификации тату машинок по принципу работы и
            назначению, важно отметить, чем профессиональная тату машинка
            отличается от китайских и самодельных тату машинок и почему мастеру,
            который серьезно относится к работе, стоит выбирать именно
            профессиональное тату-оборудование.
          </p>
          <h1 className={styles.helpPage_headerSubtitle}>Профессиональные</h1>
          <p className={styles.helpPage_header_info}>
            Тату машинки от известного производителя — это хорошая репутация,
            многолетний опыт создателя, качество, которому можно доверять
            гарантия. Такие машинки проходят тестирование и строгий контроль
            качества материалов, комплектующих и сборки . В умелых руках тату
            мастера профессиональная тату машинка гарантирует четкий контур,
            ровный закрас, плавные тени и всегда идеальный результат в каждой
            детали. Бренды профессионального тату оборудования могут оказать
            информационную поддержку, провести техобслуживание, а также они
            постоянно улучшают и развивают свои продукты, учитывая мнение и опыт
            мастеров. Это, в свою очередь, отражается и на цене.
          </p>
          <h1 className={styles.helpPage_headerSubtitle}>Китайские</h1>
          <p className={styles.helpPage_header_info}>
            Китайские Дешевые тату машинки китайского производства сильно
            уступают профессиональным в настройках и уровне сервиса, но
            безусловно выигрывают в цене, так как они изготавливаются из более
            дешевого сырья с меньшими затратами на производство и тем более
            проектирование. В большинстве случаев они просто копируют внешний
            вид популярных тату машинок, но не их возможности. Такая тату
            машинка подойдет только для знакомства новичка с ее устройством,
            формой, балансом, так как такой тату мастер пока не имеет понимания,
            с какой тату машинкой ему будет комфортнее работать и как она
            подключается, запускается и вообще устроена. Скорее всего, в начале
            карьеры вам захочется попробовать сразу несколько тату машинок — как
            индукционных, так и роторных, чтобы понять, какая вам нравится
            больше. В таком случае тату машинка из Китая — выгодный и вполне
            вариант для старта знакомства с тату оборудованием. Мы рекомендуем
            такие машинки только для тренировок на искусственной коже, чтобы
            освоить базу, попробовать разные типы машин и «поставить руку».
          </p>
          <h1 className={styles.helpPage_headerSubtitle}>Домашние</h1>
          <p className={styles.helpPage_header_info}>
            Когда-то давно все мастера делали себе машинки сами, именно первые
            самодельные машинки стали прототипами серийных, которые сейчас можно
            приобрести в нашем магазине. Домашняя тату машинка имеет место быть
            и по сей день: кто-то делает их из любопытства, а кто-то потому что
            это дешево и нет других вариантов. Некоторые производители продают
            готовые наборы по сборке тату машинок и проводят мастер-классы.
            Самодельная тату машинка может получиться вполне рабочей и даже
            эффективной (если мы не говорим про моторчик от бритвы, струну и
            «жженку», разумеется), но ей будет не хватать самого важного, что
            есть в профессиональном оборудовании: опыта и технических данных его
            проектировщиков. В любом случае, опыт самостоятельного изготовления
            домашней тату машинки поможет разобраться в принципе работы
            профессиональной и её устройстве.
          </p>
          <h1 className={styles.helpPage_header}>Индукционные тату машинки: принцип работы и назначение</h1>
          <p className={styles.helpPage_header_info}>Начинаем изучать виды тату машинок с индукционной тату машинки. В ней весь механизм действий держится на принципе электромагнитной индукции. Катушки создают магнитное поле, которое раскачивает боек, а к нему крепится тату игла. Здесь важный элемент — это пружина, она отвечает за стабилизацию движения иглы.

Важно учесть то, что индукции не универсальны, в отличие от роторов, и именно это — главное отличие между этими категориями тату машинок. Индукция всегда заточена под конкретную задачу — контур или закрас, и именно это и позволяет ей работать максимально эффективно. В связи с этим индукционные тату машинки делятся на лайнеры и шейдеры, и ниже мы расскажем, чем отличаются тату машинки для контура и закраса. А более подробно о тех, и других мы уже писали в нашей статье.</p>
<h1 className={styles.helpPage_header} name="inductione-name">Виды индукционных тату машинок</h1>
<h1 className={styles.helpPage_headerSubtitle}>Контурные (лайнеры)</h1>
<p className={styles.helpPage_header_info}>Тату машинка для контура понадобится вам для прорисовки линий. Делает она это быстро и в один проход за счет за счет облегченного бойка и высокого подъема пружины, поэтому и тату краска вбивается ровно и четко.

К индукции для контура подбираются разные конфигурации тату игл: тонкие рисуют мелкие детали и наброски, а большие 13-18RL хороши для жирных и четких линий.</p>
<h1 className={styles.helpPage_headerSubtitle}>Закрасочные (шейдеры)</h1>
<p className={styles.helpPage_header_info}>Цели шейдера — покрас, тени и плавные переходы. Тату машинка для закраса работает медленнее, чем лайнер, а в ее основе — чаще всего более тяжелый боек. Кроме того, закрасочные индукции работают тише, чем контурные. Есть и иные отличия, обо всех и сразу можно прочитать в нашем блоге.

Шейдеры нужны для теней, перехода и покраса. Есть тату машинки только для быстрого плотного покраса, которые называются ColourPacker.</p>
<h1 className={styles.helpPage_headerSubtitle}>Универсальные</h1>
<p className={styles.helpPage_header_info}>Очень редкий тип индукционных тату машинок. Назвать их универсальными в полном смысле очень сложно. Такие тату машинки настроены так, чтобы работать с крупными конфигурациями игл для линий и небольшими конфигурациями игл для теней.

Таким образом, индукционный универсал работает эффективно в довольно узком диапазоне задач. Пример такой тату машинки — Skinductor Model 3.</p>
<Swiper
                spaceBetween={1}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.induction}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.inductionTwo}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.inductionThree}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.inductionFour}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.inductionFive}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.inductionSix}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.inductionSeven}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.inductionEight}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.inductionNine}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_inductImageBox + " " + styles.inductionTen}></div>{" "}
                </SwiperSlide>
              </Swiper>

<h1 className={styles.helpPage_header} name="rotor-name">Роторные тату машинки</h1>
<p className={styles.helpPage_header_info}>Теперь переходим к роторной тату машинке и начнем с принципа работы. В его основе — мотор, который преобразует вращательное движение роторного двигателя в поступательное движение иглы. Вращения мотора и эксцентрика имеют разные оси, за счет чего движение и становится вертикальным.
</p>
<p className={styles.helpPage_header_info}>В самом простом типе роторной машинки Direct Drive («Директ», «Поворотник») движение на иглу передается сразу же с эксцентрика, а в других типах присутствуют дополнительные механизмы, которые стабилизируют движение иглы, исключая горизонтальные колебания, возникающие во время передачи вращательного движения.</p>
<p className={styles.helpPage_header_info}>Важное преимущество ротора — его универсальность. В отличие от индукций, в случае с которыми для работы вам потребуется сразу две — тату машинка для контура и закраса, один ротор выполнит и те, и другие. Благодаря использованию различных механизмов стабилизации иглы, возрастает эффективность роторных тату машинок в контурных работах. Также некоторые роторы имеют различный или регулируемый строк (ход иглы). Длинный ход (более 4 мм.) больше подходит для линий, короткий (1,8 - 2,5 мм.) для плавных переходов и теней, а средний (3,5 - 4 мм.) считается универсальным и подходит для всех типов работ. О других важных моментах, а также плюсах и минусах роторов мы писали в этой статье. А сейчас расскажем, какие же существуют виды роторных тату машинок.</p>
<h1 className={styles.helpPage_header}>Виды роторных тату машинок</h1>
<h1 className={styles.helpPage_headerSubtitle}>Ручки</h1>
<p className={styles.helpPage_header_info}>Безоговорочные лидеры продаж не только среди роторных, но и всех тату машинок в целом. Они не только универсальны, но и удобны, и это связано с особенностями конструкции. Мотор расположен внутри корпуса ручки (чаще всего вдоль).

Ручки работают только с картрижами. Иглы тату картриджа выталкиваются специальным механизмом — плавающим подшипником или диском с лопастями.</p>
<h1 className={styles.helpPage_headerSubtitle}>Директы</h1>
<p className={styles.helpPage_header_info}>Или поворотники. Такой ротор имеет довольно простую конструкцию: движение происходит от соединения двигателя с эксцентриком со смещенным центром и небольшим радиусом вращения. Цепочка такая: игла крепится на пин, который находится на эксцентрике, соединенном с мотором, в итоге пин двигается вверх-вниз.

У такой конструкции есть нюанс: движение тату иглы не всегда стабильно, поэтому иногда наблюдается ее поперечное биение. Отсюда и особенность применения: директы больше подходят для покраса и теней, чем для контура.</p>
<h1 className={styles.helpPage_headerSubtitle}>Слайдеры</h1>
<p className={styles.helpPage_header_info}>Принцип их работы тот же, что и у директов, но внутри слайдера есть специальный механизм со слайдом, который стабилизирует иглу. Слайд крепится к эксцентрику и двигается в корпусе вверх и вниз, как по рельсам. Плавность движения слайда обеспечивает возвратная пружина слайда. Именно поэтому слайдер работает мягко, а игла получает стабилизацию. Такой ротор хорош в прорисовке контура и мелких деталей.</p>
<h1 className={styles.helpPage_headerSubtitle}>Гибриды</h1>
<p className={styles.helpPage_header_info}>В них тоже есть стабилизация иглы, но для этого используется боек, как в индукционной тату машинке. Отсюда и название — «гибрид». Принцип работы такой: эксцентрик передает движение на боек через шатун и заставляет его двигаться вверх и вниз. Между корпусом машинки и бойком расположена пружина, обеспечивающая ровное и плавное движение бойка. Гибриды легко справляются с любыми стилями и техниками.

Есть два вида гибридов — прямоходы и бокоходы. В первых боек расположен вдоль двигателя, а во вторых — поперек.</p>
<Swiper
                spaceBetween={1}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_rotorImageBox + " " + styles.rotor}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_rotorImageBox + " " + styles.rotorTwo}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_rotorImageBox + " " + styles.rotorThree}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_rotorImageBox + " " + styles.rotorFour}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_rotorImageBox + " " + styles.rotorFive}></div>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className={styles.blockImageInfo_rotorImageBox + " " + styles.rotorSix}></div>{" "}
                </SwiperSlide>
              </Swiper>
              <div className={styles.helpPage_checkbox}>
<h1 className={styles.helpPage_header}>Чек-лист при выборе тату машинки
</h1>
<h1 className={styles.helpPage_headerSubtitle}>Бюджет</h1>
<p className={styles.helpPage_header_info}>В первую очередь определитесь, какой бюджет вы готовы выделить на покупку тату машинки. Так вы сразу сможете понять, в какой ценовой категории ее искать.</p>
<h1 className={styles.helpPage_headerSubtitle}>Стиль и техника</h1>
<p className={styles.helpPage_header_info}>Если вы уже точно знаете, в каком стиле будете работать, то и в конфигурациях игл или картриджей разобрались. Выбирайте тату машинку, которая подойдет под ваши задачи.</p>
<h1 className={styles.helpPage_headerSubtitle}>Тип тату машинки</h1>
<p className={styles.helpPage_header_info}>Изучите разницу между роторными и индукционными тату машинками и спланируйте, с какими расходниками хотите работать — иглами или картриджами. Если ваш выбор — картриджи, тогда вам понадобится исключительно ротор, так как с индукцией они просто неэффективны, роторные же машинки работают и обоими типами игл (премейды и картриджи), за исключением ручки.

Важно отметить, что для мощных роторов может потребоваться блок с функцией запуска на повышенном вольтаже.</p>
<h1 className={styles.helpPage_headerSubtitle}>
Производитель</h1>
<p className={styles.helpPage_header_info}>Не забывайте, что репутация — это важно. Поэтому обращайте внимание на проверенных производителей, у которых можно найти много отзывов, а также примеры работ, сделанных их тату оборудованием. Выбирая профессиональную тату машинку, вы можете смело расчитывать на гарантию и обслуживание со стороны производителя.</p>
<h1 className={styles.helpPage_headerSubtitle}>
Удобство</h1>
<p className={styles.helpPage_header_info}>Выбирайте тату машинку с комфортным для вас весом и формой корпуса. Так вы обеспечите себе комфортную работу и не будете беспокоиться о постоянной усталости и повышенной нагрузке на руку во время работы. А значит избежите травм и будете работать максимально продуктивно.</p>
</div>

        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HelpPage;
