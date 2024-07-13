import React from 'react'
import { FaUser, FaCode, FaTools, FaProjectDiagram, FaBlog, FaEnvelope,FaQrcode} from 'react-icons/fa';
import './sider.scss'

const Sider = () => {
  return (
    <div className='sidebar'>
        <div className="sidebars">
            <ul>
                <li><a href=""><FaQrcode size={20}/></a></li>
                <li><a href=""><FaUser size={20}/></a></li>
                <li><a href=""><FaCode size={20}/></a></li>
                <li><a href=""><FaTools size={20} /></a></li>
                <li><a href=""><FaProjectDiagram size={20}/></a></li>
                <li><a href=""><FaBlog size={20} /></a></li>
                <li><a href=""><FaEnvelope size={20}/></a></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Sider
