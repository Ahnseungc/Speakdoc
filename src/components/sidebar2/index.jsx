import React,{useEffect,useRef,useState} from "react";
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify} from "@fortawesome/free-solid-svg-icons";
import Sidebaritem from "../sidebarItem";
import { useSelector } from "react-redux";

const Sidebar = ({ width=280,children}) => {
  const [isOpen, setOpen] = useState(false);
  let [xPosition, setXposition] = useState(width);
  const [classNames, setClassNames] = useState('button');
  const side = useRef();
  const {img} = useSelector(state=>state);
  const [imglist,setImglist] =useState([img]);

  useEffect(()=>{
    let copy = [...imglist];
    copy.push(img);
    setImglist(copy);
    console.log(imglist);
  },[img])

  // button 클릭 시 토글 
    const toggleMenu = (e) => { 
      if (xPosition > 0) {
        setClassNames("button active") 
        console.log(classNames)
        setXposition(0);
        setOpen(true);
      } else {       
        console.log("닫힘")
        setClassNames("button") 
        console.log(classNames)
        setXposition(width);
        setOpen(false);
      }
    };

  
  
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async e => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setXposition(width); 
      await setOpen(false);
      await setClassNames("button");
    }
  }

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })
  
  return (
    <div className="container">
      <div ref={side}  className="sidebar" style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
          <button onClick={() => toggleMenu()}
          className={classNames}>
            {isOpen ? 
            <div className="delete"></div> : <FontAwesomeIcon icon={faAlignJustify}
            />
            }
          </button>
        <div className="content">
          {children}
          {
            
              imglist.map((img)=>{
                return(
                  img!=="" ? <Sidebaritem img={img}/>  : null        
                  
                )
              })
            
          }          
          
        </div> 
      </div>
    </div>
  );
};


export default Sidebar;