import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "@/contexts/LanguageContext";
import wellnessAccessories from "@/assets/wellness-accessories.jpg";
import massageTherapy from "@/assets/massage-therapy.jpg";
import classicalMassage from "@/assets/classical-massage.jpg";
import backMassage from "@/assets/back-massage.jpg";
import energyTherapy from "@/assets/energy-therapy.jpg";
import facialMassage from "@/assets/facial-massage-new.jpg";

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { t } = useLanguage();

  const services = [
    // 1. SOMA Wellness Ritual
    {
      title: t("Ритуал за благоденствие", "SOMA Wellness Ritual"),
      description: t(
        "Изкуството на дълбоката релаксация... Подарете си 90 минути бягство от шума на ежедневието със SOMA Ритуал – холистична терапия, вдъхновена от източни традиции и създадена за модерния ум и тяло. Финият баланс от тайландски масаж, ароматерапия, лечебно дишане и деликатно отпускане на мускулатурата ще ви отведе в състояние на дълбока почивка и вътрешна тишина. Ритуалът е прецизно структуриран, за да намали стреса, възстанови енергийния поток и възвърне усещането за лекота и хармония.",
        "The art of deep relaxation... Give yourself a 90-minute escape from the hustle and bustle of everyday life with SOMA Ritual - a holistic therapy inspired by Eastern traditions and created for the modern mind and body. The subtle balance of Thai massage, aromatherapy, healing breathing and delicate muscle relaxation will take you to a state of deep rest and inner silence. The ritual is precisely structured to reduce stress, restore energy flow and regain a sense of lightness and harmony."
      ),
      benefits: [
        t("За онези, които търсят не просто масаж, а истинско преживяване", "For those who are looking for more than just a massage, but a true experience.")
      ],
      suitableFor: [],
      price90: t("150лв", "150 BGN"),
      duration90: t("90 минути", "90 minutes"),
      image: wellnessAccessories,
      featured: true,
      category: 'signature' as const
    },
    // 2. Phytotherapy Consultation
    {
      title: t("Фитотерапевтична консултация", "Phytotherapy Consultation"),
      description: t(
        "Индивидуална консултация, насочена към постигане на баланс и хармония чрез силата на лечебните растения. По време на срещата ще изследваме твоето състояние в дълбочина и ще изготвим персонализиран фитотерапевтичен план с натурални средства – билкови тинктури, чайове, масла и други природни формули.",
        "Individual consultation aimed at achieving balance and harmony through the power of medicinal plants. During the meeting, we will examine your condition in depth and prepare a personalized phytotherapy plan with natural remedies – herbal tinctures, teas, oils and other natural formulas."
      ),
      benefits: [
        t("Укрепване на имунната система", "Strengthening the immune system"),
        t("Справяне със стрес, тревожност и емоционален дисбаланс", "Coping with stress, anxiety and emotional imbalance"),
        t("Хормонален баланс", "Hormonal balance"),
        t("Детоксикация и общо възстановяване на организма", "Detoxification and general recovery of the body")
      ],
      suitableFor: [
        t("Конкретни здравословни оплаквания", "Specific health complaints"),
        t("Превантивна грижа", "Preventive care")
      ],
      price60: t("80лв", "80 BGN"),
      duration60: t("60 минути", "60 minutes"),
      image: energyTherapy,
      category: 'coaching' as const
    },
    // 3. Wellness Coaching Consultation
    {
      title: t("Wellness Coaching консултация", "Wellness Coaching Consultation"),
      description: t(
        "Усещаш ли, че е време за промяна, но не знаеш откъде да започнеш? Тази консултация е твоето пространство за осъзнаване, подредба и нов фокус. Заедно ще изследваме начина ти на живот, емоционалните ти нужди, вътрешните блокажи и ще създадем ясен и устойчив план за баланс и благополучие.",
        "Do you feel it is time for a change, but you don't know where to start? This consultation is your space for awareness, arrangement and a new focus. Together we will explore your lifestyle, your emotional needs, your internal blockages and create a clear and sustainable plan for balance and well-being."
      ),
      benefits: [
        t("Повече енергия и жизненост", "More energy and vitality"),
        t("Лична яснота и посока", "Personal clarity and direction"),
        t("Освобождаване от стрес и напрежение", "Relief from stress and tension"),
        t("Здравословни навици, които са реалистични и устойчиви", "Healthy habits that are realistic and sustainable"),
        t("По-дълбока връзка със себе си", "A deeper connection with yourself")
      ],
      suitableFor: [
        t("Търсещи промяна", "Seeking change"),
        t("Баланс и благополучие", "Balance and well-being")
      ],
      price60: t("90лв", "90 BGN"),
      duration60: t("60 минути", "60 minutes"),
      image: wellnessAccessories,
      category: 'coaching' as const
    },
    // 4. Classic Massage
    {
      title: t("Класически масаж", "Classic Massage"),
      description: t(
        "Класическият масаж е златният стандарт в терапията на тялото – изкуство, което съчетава изящество и ефективност. Той въздейства върху цялото тяло чрез прецизни движения, които стимулират кръвообращението, подобряват метаболизма и освобождават натрупаното напрежение. За взискателния клиент този масаж е не просто грижа за физиката, а ритуал за пълноценна регенерация. Всяко докосване е внимателно премерено, за да носи баланс между дълбока релаксация и терапевтична сила. Резултатът е усещане за лекота, обновена енергия и хармония, които надхвърлят обикновеното удоволствие. Позволете си този първокласен момент на себеобгрижване – защото истинският лукс е здравето и спокойствието.",
        "Classic massage is the gold standard in body therapy – an art that combines grace and efficiency. It affects the entire body through precise movements that stimulate blood circulation, improve metabolism and release accumulated tension. For the demanding client, this massage is not just physical care, but a ritual for complete regeneration. Each touch is carefully measured to bring a balance between deep relaxation and therapeutic power. The result is a feeling of lightness, renewed energy and harmony that go beyond ordinary pleasure. Allow yourself this first-class moment of self-care – because true luxury is health and peace of mind."
      ),
      benefits: [
        t("Подобрява кръвообращението", "Improves blood circulation"),
        t("Облекчава мускулно напрежение", "Relieves muscle tension"),
        t("Възстановява енергията", "Restores energy")
      ],
      suitableFor: [
        t("Стрес и напрежение", "Stress and tension"),
        t("Мускулни болки", "Muscle pain")
      ],
      price60: t("90лв", "90 BGN"),
      duration60: t("60 минути", "60 minutes"),
      image: classicalMassage,
      category: 'massage' as const
    },
    // 5. Partial Back Massage
    {
      title: t("Частичен масаж на гръб", "Partial Back Massage"),
      description: t(
        "Гърбът е центърът, в който се натрупват умора, стрес и напрежение. Частичният масаж на гръб е прецизна терапия, създадена специално за хора с динамично ежедневие и високи изисквания. Фокусът е върху освобождаването на мускулни блокажи в рамене, шийна и гръбна област. Масажните техники проникват в дълбочина, стимулират кръвообращението и освобождават напрежението, което често остава незабелязано, но силно влияе върху качеството на живот. За взискателния клиент този масаж не е просто комфорт – той е стратегическа инвестиция в продуктивност, стойка и дълготрайно добро самочувствие. Една сесия е достатъчна, за да усетите яснота, облекчение и сила.",
        "The back is the center where fatigue, stress and tension accumulate. Partial back massage is a precise therapy created especially for people with dynamic everyday life and high demands. The focus is on releasing muscle blockages in the shoulders, neck and back. Massage techniques penetrate deeply, stimulate blood circulation and release tension that often goes unnoticed but strongly affects the quality of life. For the demanding client, this massage is not just comfort – it is a strategic investment in productivity, posture and long-lasting well-being. One session is enough to feel clarity, relief and strength."
      ),
      benefits: [
        t("Бързо облекчение", "Quick relief"),
        t("Фокус върху проблемни зони", "Focus on problem areas"),
        t("Подобрява стойката", "Improves posture")
      ],
      suitableFor: [
        t("Седяща работа", "Desk work"),
        t("Болки в гърба и шията", "Back and neck pain")
      ],
      price60: t("50лв", "50 BGN"),
      duration60: t("30 минути", "30 minutes"),
      image: backMassage,
      category: 'massage' as const
    },
    // 6. Traditional Thai Massage
    {
      title: t("Традиционен Тай масаж", "Traditional Thai Massage"),
      description: t(
        "Дълбоко възстановяваща терапия, която комбинира лек натиск, разтягане и ритмично движение за балансиране на енергията в тялото. Този масаж освобождава мускулното напрежение, подобрява гъвкавостта и подпомага цялостното благосъстояние. Извършва се облечен върху мат и е идеален за тези, които търсят енергизираща, цялостна грижа за тялото и ума.",
        "Deeply restorative therapy that combines gentle pressure, stretching and rhythmic movement to balance energy in the body. This massage releases muscle tension, improves flexibility and supports overall well-being. Performed clothed on a mat, it is ideal for those seeking an energizing, holistic care for body and mind."
      ),
      benefits: [
        t("Подобрява гъвкавостта", "Improves flexibility"),
        t("Балансира енергията", "Balances energy"),
        t("Освобождава напрежение", "Releases tension")
      ],
      suitableFor: [
        t("Скованост", "Stiffness"),
        t("Енергиен дисбаланс", "Energy imbalance")
      ],
      price60: t("100лв", "100 BGN"),
      duration60: t("60 минути", "60 minutes"),
      price90: t("130лв", "130 BGN"),
      duration90: t("90 минути", "90 minutes"),
      image: massageTherapy,
      category: 'massage' as const
    },
    // 7. Energy Therapy with Thai Massage Techniques
    {
      title: t("Енергийна терапия с техники от тайландски масаж", "Energy Therapy with Thai Massage Techniques"),
      description: t(
        "Специализирана терапия, която съчетава традиционен тайландски масаж с фокусирано енергийно лечение. Чрез прецизен натиск върху енергийните точки и балансиране на жизнената сила, терапията освобождава физически и емоционални блокажи. Подходяща е за хора, които търсят вътрешен баланс, яснота и обновена жизненост.",
        "Specialized therapy that combines traditional Thai massage with focused energy healing. Through precise pressure on energy points and balancing life force, the therapy releases physical and emotional blockages. It is suitable for people seeking inner balance, clarity and renewed vitality."
      ),
      benefits: [
        t("Балансира жизнената сила", "Balances life force"),
        t("Освобождава блокажи", "Releases blockages"),
        t("Яснота и фокус", "Clarity and focus")
      ],
      suitableFor: [
        t("Емоционален дисбаланс", "Emotional imbalance"),
        t("Търсещи вътрешен мир", "Seeking inner peace")
      ],
      price60: t("110лв", "110 BGN"),
      duration60: t("60 минути", "60 minutes"),
      price90: t("140лв", "140 BGN"),
      duration90: t("90 минути", "90 minutes"),
      image: energyTherapy,
      category: 'therapy' as const
    },
    // 8. Rejuvenating Facial Therapy
    {
      title: t("Подмладяваща терапия за лице", "Rejuvenating Facial Therapy"),
      description: t(
        "Нежна подмладяваща терапия за лице, която подобрява кръвообращението, стяга кожата и намалява фините линии. Процедурата отпуска мускулите, освежава тена и придава естествен блясък.",
        "Gentle rejuvenating facial therapy that improves blood circulation, tightens skin and reduces fine lines. The procedure relaxes muscles, refreshes complexion and gives a natural glow."
      ),
      benefits: [
        t("Подобрява тена", "Improves complexion"),
        t("Намалява фини линии", "Reduces fine lines"),
        t("Естествен блясък", "Natural glow")
      ],
      suitableFor: [
        t("Антиейдж грижа", "Anti-aging care"),
        t("Уморена кожа", "Tired skin")
      ],
      price60: t("50лв", "50 BGN"),
      duration60: t("30 минути", "30 minutes"),
      image: facialMassage,
      category: 'beauty' as const
    }
  ];

  const handleToggle = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="services-section" aria-label="Services section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4" data-testid="services-heading">
            {t("Нашите", "Our")} <span className="font-bold text-primary">{t("Услуги", "Services")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t(
              "Открийте пътя към вътрешно равновесие и хармония чрез нашите специализирани терапии",
              "Discover the path to inner balance and harmony through our specialized therapies"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isExpanded={expandedCard === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
