import { useState } from "react";
import type { FormEvent } from "react";
import "./App.css";
import {
  address,
  cases,
  courses,
  hotelPoints,
  images,
  phone,
  phoneHref,
  requests,
  reviews,
  routes,
  vkUrl,
} from "./data";
import { useReveal } from "./hooks/useReveal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  useReveal();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="site">
      <header className="header">
        <div className="wrap header-inner">
          <a className="brand-mark" href="#top">
            WISE ANIMAL
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Закрыть" : "Меню"}
          </button>
          <nav className={`nav${menuOpen ? " open" : ""}`} aria-label="Основная">
            <a href="#yard" onClick={() => setMenuOpen(false)}>
              Двор
            </a>
            <a href="#school" onClick={() => setMenuOpen(false)}>
              Школа
            </a>
            <a href="#hotel" onClick={() => setMenuOpen(false)}>
              Гостиница
            </a>
            <a href="#grooming" onClick={() => setMenuOpen(false)}>
              Груминг
            </a>
            <a href="#results" onClick={() => setMenuOpen(false)}>
              Результаты
            </a>
            <a className="nav-phone" href={phoneHref}>
              {phone}
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Главный экран">
          <div className="hero-media" aria-hidden="true">
            <img
              src={images.hero}
              alt=""
              width={2200}
              height={1400}
              fetchPriority="high"
            />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <h1 className="hero-brand">WISE ANIMAL</h1>
            <p className="hero-line">
              Школа, зоогостиница и груминг на одном дворе в Стерлитамаке
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#consult">
                Бесплатная консультация
              </a>
              <a className="btn btn-ghost" href="#hotel">
                Смотреть условия гостиницы
              </a>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            Двор ниже
          </div>
        </section>

        <div className="trust-strip">
          <div className="wrap trust-strip-inner">
            <span>
              <strong>База:</strong> {address}
            </span>
            <span>
              <strong>КАВС</strong> · школа Алексея Саламатина
            </span>
            <span>
              <strong>Стерлитамак</strong> · Ишимбай · Салават
            </span>
          </div>
        </div>

        <section className="yard" id="yard">
          <div className="wrap">
            <div className="yard-head reveal">
              <p className="eyebrow">Ориентир двора</p>
              <h2 className="section-title">Три маршрута одной территории</h2>
              <p className="section-lead">
                Не три разных бизнеса в рекламе — а понятные зоны одной базы за
                городом. Выбираете, зачем приехали.
              </p>
            </div>
            <div className="yard-routes">
              {routes.map((route) => (
                <a
                  key={route.id}
                  className="route reveal"
                  href={`#${route.id}`}
                >
                  <span className="route-index">{route.index}</span>
                  <span>
                    <h3>{route.title}</h3>
                    <p>{route.text}</p>
                  </span>
                  <span className="route-go">Перейти</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="requests" id="requests">
          <div className="wrap requests-grid">
            <div className="reveal">
              <p className="eyebrow">С чего начать</p>
              <h2 className="section-title">С каким запросом вы приехали</h2>
              <p className="section-lead" style={{ marginTop: "1rem" }}>
                Сайт ведёт не в абстрактный «прайс», а в сценарий под вашу
                собаку. Если сомневаетесь — начните с консультации.
              </p>
            </div>
            <div className="request-list reveal">
              {requests.map((item) => (
                <div className="request-item" key={item.label}>
                  <span>{item.label}</span>
                  <span>{item.target}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="school" id="school">
          <div className="wrap school-layout">
            <div className="school-visual reveal">
              <div className="media-frame">
                <img
                  src={images.school}
                  alt="Занятие с собакой на открытой площадке"
                  width={1400}
                  height={1600}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="school-copy reveal">
              <p className="eyebrow">Школа воспитания и дрессировки</p>
              <h2 className="section-title">Программы как станции площадки</h2>
              <p className="section-lead">
                Курсы подобраны под возраст и задачу. Берём собак любого возраста
                и породы — в том числе с проживанием на базе.
              </p>
              <div className="course-rail">
                {courses.map((course) => (
                  <article className="course" key={course.name}>
                    <div>
                      <h3>{course.name}</h3>
                      <p>{course.note}</p>
                    </div>
                    <span className="course-mark" aria-hidden="true" />
                  </article>
                ))}
              </div>
              <div>
                <a className="btn btn-dark" href="#consult">
                  Подобрать формат на консультации
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="results" id="results">
          <div className="wrap">
            <div className="results-head reveal">
              <p className="eyebrow">Доказательства практики</p>
              <h2 className="section-title">Результаты с кличками</h2>
              <p className="section-lead">
                Не анонимные «до/после», а реальные ученики школы — как в рабочих
                отчётах команды.
              </p>
            </div>
            <div className="case-stack">
              {cases.map((item) => (
                <article className="case reveal" key={item.name}>
                  <div className="case-media media-frame">
                    <img
                      src={item.image}
                      alt={`${item.name}, ${item.breed}`}
                      width={1400}
                      height={1000}
                      loading="lazy"
                    />
                  </div>
                  <div className="case-body">
                    <div>
                      <p className="case-breed">{item.breed}</p>
                      <h3 className="case-name">{item.name}</h3>
                    </div>
                    <div className="case-meta">
                      <div>
                        <strong>Задача</strong>
                        {item.task}
                      </div>
                      <div>
                        <strong>Что изменилось</strong>
                        {item.result}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hotel" id="hotel">
          <div className="wrap hotel-layout">
            <div className="reveal">
              <p className="eyebrow">Зоогостиница</p>
              <h2 className="section-title">Как живут на дворе</h2>
              <p className="section-lead" style={{ marginTop: "1rem" }}>
                Владельцу важно увидеть условия до того, как оставить питомца.
                Гостиница — часть кинологической базы, а не отдельная «клетка по
                объявлению».
              </p>
              <div className="hotel-points">
                {hotelPoints.map((point) => (
                  <article className="hotel-point" key={point.title}>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </article>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <a className="btn btn-primary" href="#consult">
                  Узнать свободные места
                </a>
              </div>
            </div>
            <div className="hotel-visual reveal">
              <div className="media-frame">
                <img
                  src={images.hotel}
                  alt="Собака на территории базы"
                  width={1400}
                  height={1200}
                  loading="lazy"
                />
              </div>
              <p className="hotel-note">
                «Привозите своих питомцев к нам в гости» — тон их коммуникации:
                двор принимает, а не складирует.
              </p>
            </div>
          </div>
        </section>

        <section className="grooming" id="grooming">
          <div className="wrap grooming-layout">
            <div className="grooming-visual reveal">
              <div className="media-frame">
                <img
                  src={images.grooming}
                  alt="Уход за собакой"
                  width={1400}
                  height={1200}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="grooming-copy reveal">
              <p className="eyebrow">Груминг</p>
              <h2 className="section-title">Уход рядом со школой и гостиницей</h2>
              <p className="section-lead">
                Третье направление двора: гигиена и внешний вид питомца без
                поездки по городу между разными точками.
              </p>
              <a className="btn btn-line" href="#consult">
                Записаться на груминг
              </a>
            </div>
          </div>
        </section>

        <section className="founder" id="founder">
          <div className="wrap founder-layout">
            <div className="founder-visual reveal">
              <div className="media-frame">
                <img
                  src={images.founder}
                  alt="Рабочий кадр с собакой на улице"
                  width={1200}
                  height={1400}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="founder-copy reveal">
              <p className="eyebrow">Кто ведёт двор</p>
              <h2 className="section-title">Алексей Саламатин</h2>
              <p className="founder-quote">
                «Мы научим вас общаться с вашей собакой. Быть в гармонии с ней.»
              </p>
              <p className="section-lead">
                Президент КАВС, автор книги «Ваша собака вас слушается»,
                преподаватель кинологических курсов. Путь из служебной кинологии
                — к воспитанию семейных собак.
              </p>
              <ul className="founder-facts">
                <li>Школа Wise Animal на базе в с. Загородный</li>
                <li>Филиал школы в Ишимбае</li>
                <li>Видеоотчёты по ученикам и гостинице в VK</li>
                <li>Бесплатная консультация по вопросам о собаке</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="geo" id="geo">
          <div className="wrap geo-layout">
            <div className="geo-block reveal">
              <h3>База</h3>
              <p>
                {address}. Сюда приезжают на занятия, передержку и груминг —
                один двор, разные задачи.
              </p>
            </div>
            <div className="geo-block reveal">
              <h3>География</h3>
              <p>
                Стерлитамак, Ишимбай, Салават. Берём собак на дрессировку из
                других городов с проживанием на базе. Есть зоотакси.
              </p>
            </div>
          </div>
        </section>

        <section className="reviews" id="reviews">
          <div className="wrap">
            <div className="reveal">
              <p className="eyebrow">Доверие по направлениям</p>
              <h2 className="section-title">Отзывы не в одну кучу</h2>
            </div>
            <div className="review-rail">
              {reviews.map((item) => (
                <article className="review reveal" key={item.area}>
                  <p className="review-area">{item.area}</p>
                  <p>{item.quote}</p>
                </article>
              ))}
            </div>
            <p className="reveal" style={{ marginTop: "1.5rem" }}>
              Живые обсуждения — в группе:{" "}
              <a href={vkUrl} target="_blank" rel="noreferrer">
                vk.ru/sobaki_as
              </a>
            </p>
          </div>
        </section>

        <section className="consult" id="consult">
          <div className="wrap consult-layout">
            <div className="reveal">
              <p className="eyebrow">Следующий шаг</p>
              <h2 className="section-title">Расскажите о собаке</h2>
              <p className="section-lead" style={{ marginTop: "1rem" }}>
                Подскажем формат: курс, передержка, груминг или комбинация.
                Консультация бесплатна.
              </p>
              <p style={{ marginTop: "1.25rem" }}>
                Или сразу:{" "}
                <a href={phoneHref}>
                  <strong>{phone}</strong>
                </a>
              </p>
            </div>

            <form className="consult-form reveal" onSubmit={onSubmit}>
              {sent ? (
                <div className="form-success">
                  Заявка подготовлена на стороне концепта. В боевой версии она
                  уйдёт в мессенджер или CRM команды Wise Animal. Пока напишите
                  в VK или позвоните по номеру выше.
                </div>
              ) : (
                <>
                  <div className="field">
                    <label htmlFor="dog">Кличка / порода</label>
                    <input id="dog" name="dog" required placeholder="Например: Эмир, кавказская овчарка" />
                  </div>
                  <div className="field">
                    <label htmlFor="need">Запрос</label>
                    <select id="need" name="need" defaultValue="consult">
                      <option value="consult">Пока нужна консультация</option>
                      <option value="school">Школа / дрессировка</option>
                      <option value="hotel">Гостиница</option>
                      <option value="grooming">Груминг</option>
                      <option value="mix">Несколько направлений</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Телефон</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+7 ..."
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="note">Коротко о ситуации</label>
                    <textarea
                      id="note"
                      name="note"
                      placeholder="Что беспокоит, возраст, город"
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Отправить заявку
                  </button>
                  <p className="form-note">
                    Нажимая кнопку, вы соглашаетесь на связь по указанному
                    телефону. Цены и слоты подтверждаем в разговоре.
                  </p>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <strong>WISE ANIMAL</strong>
            <div>Кинологический двор · КАВС</div>
          </div>
          <div>
            <div>{address}</div>
            <a href={phoneHref}>{phone}</a>
          </div>
          <div>
            <a href={vkUrl} target="_blank" rel="noreferrer">
              Группа VK
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
