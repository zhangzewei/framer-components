import Menu from './components/Menu'
import Slide from './components/Slide'
import './App.css'

function App() {
  const images = [{
    key: '122',
    src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8vgd3.png'
  }, {
    key: '2333',
    src: 'https://w.wallhaven.cc/full/0j/wallhaven-0j2kq4.jpg'
  }, {
    key: '344',
    src: 'https://w.wallhaven.cc/full/wy/wallhaven-wy5gj7.jpg'
  }]
  return (
    <div className='flex justify-center items-center'>
      <Menu
        list={[
          {
            key: '111',
            text: '1111'
          }, {
            key: '111',
            text: '1111'
          }, {
            key: '111',
            text: '1111'
          }, {
            key: '111',
            text: '1111'
          }, {
            key: '111',
            text: '1111'
          }, {
            key: '111',
            text: '1111'
          }, {
            key: '111',
            text: '1111'
          }, {
            key: '111',
            text: '1111'
          }
        ]}
      >Menu</Menu>
      <Slide images={images} />
    </div>
  )
}

export default App
