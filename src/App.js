import React from "react";
import{useState} from "react";
import Header from "./component/Header";
import Items from "./component/Items";
import Footer from "./component/Footer";
import "./index.scss";




export default function App() {

  const[items,setItems]=useState([
    {
      id:1,
      title:'AGM',
      img:'agm.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'nothing',
      price:'100 $'
    },

    {
      id:2,
      title:'Fly',
      img:'fly.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'nothing',
      price:'98 $'
    },

    {
      id:3,
      title:'Honor',
      img:'honor.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'nothing',
      price:'90 $'
    },

    {
      id:4,
      title:'Iphone',
      img:'iphone.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'Apply',
      price:'120 $'
    },

    {
      id:5,
      title:'Lenovo',
      img:'lenovo.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'nothing',
      price:'60 $'
    },

    {
      id:6,
      title:'LG',
      img:'lg.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'nothing',
      price:'50 $'
    },

    {
      id:7,
      title:'NOKIA',
      img:'nokia.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'nothing',
      price:'70 $'
    },

    {
      id:8,
      title:'Samsung',
      img:'samsung.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'nothing',
      price:'75 $'
    },

    {
      id:9,
      title:'Xiaomi',
      img:'xiaomi.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'nothing',
      price:'80 $'
    },

    {
      id:10,
      title:'ZTE',
      img:'zte.jpg',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.',
      category:'nothing',
      price:'78 $'
    },
    
  ]);





  return (
    <div className="wrapper">
     <Header/>
     <Items allItems={items}/>
     <Footer/>
     
    </div>
  );
}

 
