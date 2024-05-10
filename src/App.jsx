import Menu from './components/Menu'
import Slide from './components/Slide'
import './App.css'

function App() {
  const images = [
    'https://pic.rmb.bdstatic.com/bjh/gallery/03e17cba710868d9153176b50a5fca0d1090.jpeg',
    'https://img0.baidu.com/it/u=2123036823,827931345&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
    'https://img1.baidu.com/it/u=1179199327,1946315836&fm=253&fmt=auto&app=138&f=JPEG?w=1364&h=800'
  ]
  return (
    <div className='flex justify-center items-center'>
      <div className='h-[250px] w-[450px]'>
        <Slide images={images} />
      </div>
    </div>
  )
}

export default App
