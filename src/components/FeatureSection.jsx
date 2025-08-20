import { motion as Motion } from "framer-motion";

const FeatureSection = () => {

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 1.2,
        bounce: 0.15,
        damping: 20,
        stiffness: 100
      },
    },
    hover: {
      y: -5,
      rotateX: -1,
      transition: {
        type: "spring",
        bounce: 0.1,
        damping: 20,
        stiffness: 250
      },
    },
    active: {
      scale: 0.95,
      y: -2,
      rotateX: 1,
      transition: {
        type: "spring",
        duration: 0.15,
        bounce: 0,
        damping: 40,
        stiffness: 200
      },
    },
  };

  // No interactive press animation required

  const features = [
    { id: "klasse-a", title: "Klasse A", description: "Krafträder in vier Kategorien, von leichten Kleinkrafträdern (Mopeds) bis größere Motorräder.", icon: "motorcycle", iconTop: false, iconLeft: true },
    { id: "klasse-b", title: "Klasse B", description: "Pkw und leichte Nutzfahrzeuge, ausgenommen von Krafträder.", icon: "car", iconTop: true, iconLeft: false },
    { id: "umschreiben", title: "Umschreiben", description: "Wer aus Drittstaaten dauerhaft nach Deutschland umzieht, muss seine ausländische Fahrerlaubnis umschreiben lassen.", icon: "arrows-left-right", iconTop: false, iconLeft: true },
    { id: "klasse-c", title: "Klasse C", description: "Lkw und Kraftfahrzeuge mit einer zulässigen Gesamtmasse von mehr als 3.500 kg.", icon: "truck", iconTop: false, iconLeft: false },
    { id: "klasse-d", title: "Klasse D", description: "Bus und Kraftfahrzeuge, die der Beförderung von mehr als 8 Personen dienen.", icon: "bus", iconTop: false, iconLeft: false },
    { id: "klasse-l-t", title: "Klasse L und T", description: "L steht für Landwirtschaft und T für Traktor. Diese Klassen gelten für Zugmaschinen.", icon: "tractor", iconTop: false, iconLeft: false },
  ];

  const getIcon = (iconName, screenSize = 'desktop') => {
    const iconPath = `/assets/${iconName}.svg`;

    // Universal filter for #4611F5
    const purpleStyle = {
      filter: 'invert(13%) sepia(93%) saturate(7481%) hue-rotate(251deg) brightness(93%) contrast(113%)'
    };

    if (screenSize === 'desktop') {
      if (iconName === 'motorcycle' || iconName === 'car' || iconName === 'arrows-left-right') {
        return <img src={iconPath} alt={iconName} className="w-[120px] h-[120px]" style={purpleStyle} />;
      } else {
        return <img src={iconPath} alt={iconName} className="w-[48px] h-[48px]" style={purpleStyle} />;
      }
    }

    if (screenSize === 'tablet') {
      if (iconName === 'motorcycle' || iconName === 'car') {
        return <img src={iconPath} alt={iconName} className="w-[120px] h-[120px]" style={purpleStyle} />;
      } else if (iconName === 'truck' || iconName === 'bus') {
        return <img src={iconPath} alt={iconName} className="w-[48px] h-[48px]" style={purpleStyle} />;
      } else {
        return <img src={iconPath} alt={iconName} className="w-[24%] h-[75%]" style={purpleStyle} />;
      }
    }

    if (screenSize === 'mobile') {
      if (iconName === 'car' || iconName === 'arrows-left-right') {
        return <img src={iconPath} alt={iconName} className="w-[120px] h-[120px]" style={purpleStyle} />;
      } else {
        return <img src={iconPath} alt={iconName} className="w-[48px] h-[48px]" style={purpleStyle} />;
      }
    }

    // Default fallback
    return <img src={iconPath} alt={iconName} className="w-8 h-8" style={purpleStyle} />;
  };


  const renderCard = (feature, index, padding = "p-8", extraClasses = "", screenSize = 'desktop') => {
    const isIconLeft = feature.iconLeft && screenSize !== 'mobile';

    return (
      <Motion.div
        key={feature.id}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        whileTap="active"
        viewport={{ once: true, margin: "-80px", amount: 0.3 }}
        transition={{
          delay: index * 0.15,
          duration: 1.2,
          type: "spring",
          bounce: 0.15,
          damping: 20,
          stiffness: 100
        }}

        className={`relative group cursor-pointer w-full h-full ${extraClasses}`}
      >
        <div
          className={`bg-white rounded-[24px] ${padding} w-full h-full flex flex-col shadow-lg card-hover border border-gray-100`}
        >
          {/* Content area with layout variants */}
          {isIconLeft ? (
            <div className="flex items-start gap-6 mb-2">
              <div className="shrink-0">{getIcon(feature.icon, screenSize)}</div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1A202C] text-[24px] leading-snug truncate whitespace-nowrap mb-2 transition-all duration-200 ">
                  {feature.title}
                </h3>
                <p className="text-[#3D3D3D] w-[350px] relative top-2 font-dm-sans leading-relaxed text-lg transition-all duration-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ) : feature.iconTop ? (
            <div
              className={`${feature.id === "klasse-b"
                ? "flex flex-col justify-center h-full text-left items-stretch"
                : "flex flex-col items-center justify-center text-center mb-2 h-full"
                }`}
            >
              <div
                className={`${feature.id === "klasse-b"
                  ? "flex flex-col justify-center flex-1 items-stretch"
                  : "flex flex-col items-center justify-center flex-1"
                  }`}
              >
                <div className="mb-3 self-center flex items-center justify-center">
                  {getIcon(feature.icon, screenSize)}
                </div>
                <h3
                  className={`font-bold text-[#1A202C] text-[24px] leading-snug w-full transition-all duration-200 ${feature.id === "klasse-b" ? "text-left" : "text-center"
                    }`}
                >
                  {feature.title}
                </h3>
                {feature.id === "klasse-b" && (
                  <p className="text-[#3D3D3D] font-dm-sans leading-relaxed text-lg transition-all duration-200 mt-2">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-[#1A202C] text-[24px] leading-snug truncate whitespace-nowrap pr-3 transition-all duration-200 ">
                {feature.title}
              </h3>
              <div>{getIcon(feature.icon, screenSize)}</div>
            </div>
          )}

          {/* Description outside only if not handled inside */}
          {!isIconLeft && !feature.iconTop && (
            <p className="text-[#3D3D3D] font-dm-sans leading-relaxed text-lg transition-all duration-200">
              {feature.description}
            </p>
          )}

          {/* Plus button always at bottom */}
          <div className="flex justify-end mt-auto">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center transition-all duration-200"
              style={{
                backdropFilter: 'blur(6px)',
                background: 'linear-gradient(135deg, rgba(207, 250, 254, 0.6), rgba(224, 195, 252, 0.6), rgba(253, 203, 255, 0.6))',
              }}>
              <img src="/public/assets/plus.svg" className="" alt="plus" />
            </div>
          </div>

        </div>

      </Motion.div>
    );
  };

  return (
    <section
      className="relative satoshi-font w-full min-h-screen flex items-center justify-center py-20 px-6"
      style={{
        backgroundImage: "url('/assets/FeatureBG.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <Motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            type: "spring",
            duration: 1.4,
            bounce: 0.2,
            damping: 25,
            stiffness: 80
          }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl lg:text-[36px] font-satoshi text-black mb-6">
            Schritte für alle Führerscheinklassen
          </h3>

        </Motion.div>

        {/* Responsive Layout */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-4">
          {/* --- Desktop Layout (lg:grid) --- */}
          <div className="hidden lg:block col-span-4 row-span-2">
            {renderCard(features[0], 0, "px-12 py-8", "", "desktop")}
          </div>
          <div className="hidden lg:block col-span-2 row-span-4">
            {renderCard(features[1], 1, "px-8 py-12", "", "desktop")}
          </div>
          <div className="hidden lg:block col-span-2 row-span-2">
            {renderCard(features[3], 3, "p-8", "", "desktop")}
          </div>
          <div className="hidden lg:block col-span-2 row-span-2">
            {renderCard(features[4], 4, "p-8", "", "desktop")}
          </div>
          <div className="hidden lg:block col-span-2 row-span-2">
            {renderCard(features[5], 5, "p-8", "", "desktop")}
          </div>
          <div className="hidden lg:block col-span-4 row-span-2">
            {renderCard(features[2], 2, "px-12 py-8", "", "desktop")}
          </div>

          {/* --- Tablet (md:grid) --- */}
          <div className="hidden md:block lg:hidden row-span-2">{renderCard(features[0], 0, "px-8 py-12", "", "tablet")}</div>
          <div className="hidden md:block lg:hidden row-span-2">{renderCard(features[1], 1, "px-8 py-12", "", "tablet")}</div>
          <div className="hidden md:block lg:hidden md:col-span-2">{renderCard(features[2], 2, "px-8 py-12", "", "tablet")}</div>
          <div className="hidden md:block lg:hidden">{renderCard(features[3], 3, "px-8 py-12", "", "tablet")}</div>
          <div className="hidden md:block lg:hidden">{renderCard(features[4], 4, "px-8 py-12", "", "tablet")}</div>
          <div className="hidden md:block lg:hidden md:col-span-2">{renderCard(features[5], 5, "px-8 py-12", "", "tablet")}</div>

          {/* --- Mobile (sm:grid) --- */}
          <div className="block md:hidden">{renderCard(features[1], 1, "px-8 py-12", "", "mobile")}</div>
          <div className="block md:hidden">{renderCard(features[2], 2, "px-8 py-12", "", "mobile")}</div>
          <div className="block md:hidden">{renderCard(features[0], 0, "px-8 py-12", "", "mobile")}</div>
          <div className="block md:hidden">{renderCard(features[3], 3, "px-8 py-12", "", "mobile")}</div>
          <div className="block md:hidden">{renderCard(features[4], 4, "px-8 py-12", "", "mobile")}</div>
          <div className="block md:hidden">{renderCard(features[5], 5, "px-8 py-12", "", "mobile")}</div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
