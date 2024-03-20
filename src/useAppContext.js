import React,{useState,useEffect,useContext} from "react";
const AppContext= React.createContext();

export const useAppContext = () =>{

    const context = useContext(AppContext);

    if(!context){
        throw new Error("Ошибка при получении в useAppContext")
    }
    return context;
}

export const AppProvider = ({children}) =>{
    const[items,setItems]=useState([
        {
          id:1,
          title:'DODGEE',
          img:'dodgee.png',
          desc:'Смартфон Doogee V Max Classic Black — защищенная модель, разработанная специально для работы в сложных условиях. Корпус, выполненный из алюминия и термопластика, соответствует стандартам IP68, IP69K и MIL-STD-810H — он не боится пыли и погружения под воду на глубину до 1 м, выдерживает воздействие горячей воды, подающейся под давлением, прошел тесты на соответствие военным стандартам США.',
          category:'DODGEE',
          price:'35890'
        },
    
        {
          id:2,
          title:'Infinix',
          img:'Infinix.png',
          desc:'Смартфон Infinix Note 30 VIP Magic Black (X6710) — модель с AMOLED-экраном диагональю 6,67 дюйма разрешением 2400x1080 пикселей. Высокая яркость 900 кд/м² и частота обновления 120 Гц обеспечивают насыщенное изображение и плавность воспроизведения динамичных сцен в играх и фильмах. За достойную производительность отвечают восьмиядерный процессор Mediatek Dimensity 8050 частотой 3 ГГц и 12 Гб оперативной памяти.',
          category:'Infinix',
          price:'32999'
        },
    
        {
          id:3,
          title:'Honor',
          img:'Honor.png',
          desc:'Смартфон Honor 90 Emerald Green обладает AMOLED-экраном диагональю 6,7 дюйма разрешением 2664х1200 пикселей, отображается 1,07 млрд цветов. Дисплей скруглен по четырем сторонам, соотношение стороны —19.98:9.Восьмиядерный процессор Snapdragon 7 Gen 1 Accelerated Edition в сочетании с 12 Гб оперативной памяти обеспечивает высокую производительность и стабильную работу, в том числе в режиме многозадачности, дает возможность играть в современные «тяжелые» игры. Объем встроенной памяти — 512 Гб.',
          category:'Honor',
          price:'44900'
        },
    
        {
          id:4,
          title:'IPhone',
          img:'iphon.png',
          desc:'Смартфон Apple iPhone 15 Pro Natural Titanium (Dual Sim) получил дисплей диагональю 6,1 дюйма, выполненный по технологии Super Retina XDR. Разрешение — 2556x1179 пикселей, яркость достигает 2000 кд/м², контрастность составляет 2000000:1 — изображение четкое, детализированное и насыщенное. Частота обновления 120 Гц обеспечивает плавность отображения любого динамичного контента. Экран защищает прочное стекло Ceramic Shield.В основе — шестиядерный процессор A17 Pro. Объем встроенной памяти для хранения данных — 128 Гб. Смартфон работает с двумя nano-SIM в сетях вплоть до 5G. Предусмотрена поддержка Wi-Fi для выхода в Сеть там, где есть точка доступа, Bluetooth версии 5.3 для связи с совместимыми',
          category:'Apply',
          price:'123999'
        },
    
        {
          id:5,
          title:'Realme',
          img:'realme.png',
          desc:'Смартфон realme GT3 240W Pulse White представлен в стеклянном корпусе. В модель установлена операционная система Android 13 версии, восьмиядерный процессор Qualcomm Snapdragon 8+ Gen 1 3 ГГц, графический ускоритель Adreno 730. Модель характеризуется большим объемом встроенной памяти — 1 Тб. Емкость оперативной памяти — 16 Гб.Дисплей смартфона произведен с использованием технологии AMOLED. Его диагональ — 6,74 дюйма, разрешение 2772x1240 пикселей. Яркость экрана — 1370 кд/м². Кадры обновляются с максимальной частотой 144 Гц.',
          category:'Realme',
          price:'59999'
        },
    
        {
          id:6,
          title:'TECNO',
          img:'Tecno.png',
          desc:'Смартфон Tecno Spark 20 Pro+ Black — это большой 6,78-дюймовый IPS-экран разрешением 1080x2436 пикселей и высокая производительность, которая обеспечивается восьмиядерным процессором Mediatek Helio G99 и 8 Гб ОЗУ.',
          category:'TECNO',
          price:'21999'
        },
    
        {
          id:7,
          title:'POCO',
          img:'Poco.png',
          desc:'Смартфон Poco X5 5G Black оснащен 6,67-дюймовым дисплеем, выполненным по технологии AMOLED. Разрешение составляет 2400х1080 пикселей, яркость — 700 нит (пиковая — 1200 нит), уровень контрастности — 4500000:1. Изображение детализированное, с насыщенными и реалистичными цветами. Частота обновления 120 Гц обеспечивает плавное отображение динамичного контента в видео и играх. Увеличенная точность сенсора пригодится геймерам.',
          category:'POCO',
          price:'30190'
        },
    
        {
          id:8,
          title:'Samsung',
          img:'samsung.png',
          desc:'Смартфон Samsung Galaxy S24 Ultra 12/256GB Onyx Black дополнен искусственным интеллектом Galaxy AI, который позволяет быстро находить любые предметы с картинок в поиске Google, легко перемещать объекты на фотографиях и переводить речь на нужный язык во время разговора по телефону. Модель оснащена прочной титановой рамкой, устойчивой к ударам. Закаленное стекло защищает экран от царапин. Устройство можно погружать под воду на глубину до 1,5 м благодаря пылевлагозащите класса IP68.',
          category:'Samsung',
          price:'146999'
        },
    
        {
          id:9,
          title:'Xiaomi',
          img:'xiaomi.png',
          desc:'Смартфон Xiaomi Redmi Note 13 Pro Lavender Purple обладает экраном диагональю 6,67 дюйма разрешением 2400x1080 пикселей, выполненным по технологии AMOLED. От царапин и потертостей его надежно защищает прочное стекло Corning Gorilla Glass 5. Быстрый доступ к телефону и защиту личных данных обеспечивает сканер отпечатка пальца, расположенный под экраном, авторизация возможна также по распознаванию лица.В основе этой модели — восьмиядерный процессор Mediatek Helio G99 и 12 Гб оперативной памяти, все процессы протекают бесперебойно даже в режиме многозадачности. Для установки приложений и хранения файлов предназначены 512 Гб встроенной памяти. При необходимости можно добавить карту microSD и увеличить хранилище (до 1 Тб).',
          category:'Xiaomi',
          price:'37999'
        },
    
        {
          id:10,
          title:'Sony',
          img:'Sony.png',
          desc:'Смартфон Sony Xperia 5 III 8/256GB Green работает на восьмиядерном процессоре Qualcomm Snapdragon 888. Для хранения файлов используется 256 Гб встроенной памяти. Возможна установка карты microSDXC максимальной емкостью 1 Тб. Экран 6.1" оснащен дисплеем OLED. Встроенные стереодинамики обеспечивают высококачественное звучание. Три основные камеры с разрешением 12/12/12 МПикс позволяют снимать видео в 4K. Высокое качество фотографий создается за счет оптической и цифровой стабилизации и вспышки.',
          category:'Sony',
          price:'99900'
        },
        
      ]);
    
      const[orders,setOrders]=useState([]);
      const [currentItems, setCurrentItems]= useState([]);
      const[showFullItem,setShowFullItem]=useState(false);
      const[fullItem,setFullItem]= useState({});
    
      useEffect(()=>{
        setCurrentItems(items);
      },[items]);
    
      const deleteOrder = (id) =>{
        setOrders(orders.filter((el)=>el.id!==id));
      }
    
      const addToOrder=(item)=>{
        if(!orders.some((el)=>el.id===item.id)){
        setOrders([...orders,item]);
        }
        //setOrders([...orders,item]);
    
      }
      const chooseCategory = (category)=>{
        if(category==="all"){
          setCurrentItems(items);
        }
          else{
            setCurrentItems(items.filter((el)=>el.category===category));
    
          }
      }
    
      const onShowItem=(item)=>{
        setFullItem(item);
        setShowFullItem(!showFullItem);
      }


      const contextValue={ 
        items,
        setItems,
        orders,
        setOrders,
        currentItems,
        setCurrentItems,
        showFullItem,
        setShowFullItem,
        fullItem,
        setFullItem,
        deleteOrder,
        addToOrder,
        chooseCategory,
        onShowItem,
      };

      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

