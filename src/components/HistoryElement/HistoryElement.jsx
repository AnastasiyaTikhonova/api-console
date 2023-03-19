import React from 'react'
import cl from './HistoryElement.module.scss'
import { GreenEllipse } from '../../icons/GreenEllipse/GreenEllipse'
import { RedEllipse } from '../../icons/RedEllipse/RedEllipse'
import { DragElement } from '../../icons/DragElement/DragElement'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'

const HistoryElement = ({ status, name }) => {
    return (
        <div className={cl.historyElement}>
            {status ? <GreenEllipse /> : <RedEllipse />}
            <span className={cl.elementName}>{name}</span>
          <div className="btn-group">
                {/*<a className={cl.dragElement} data-toggle="dropdown">
                    <DragElement />
                </a>*/}
                <Dropdown className="dropdown-component">
                    <Dropdown.Toggle as={React.forwardRef(CustomToggle)} id="dropdown-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => {}}
                            className="dropdown-component__action"
                        >
                            Выполнить
                        </Dropdown.Item>
                        {/*<CopyToClipboard text={clipboardData}>*/}
                        <Dropdown.Item
                          className="dropdown-component__action"
                          onClick={() => {}}
                        >Скопировать</Dropdown.Item>
                      {/*</CopyToClipboard>*/}
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={() => {}}
                        className="dropdown-component__action-delete"
                      >Удалить</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

const CustomToggle = ({onClick}, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault()
            onClick(e)
        }}
    >
        <DragElement />
    </a>
)

export default HistoryElement
