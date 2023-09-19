import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './HistoryElement.module.scss'
import { GreenEllipse } from '../../icons/GreenEllipse/GreenEllipse'
import { RedEllipse } from '../../icons/RedEllipse/RedEllipse'
import { DragElement } from '../../icons/DragElement/DragElement'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'
import cn from 'classnames'
import { deleteHistoryItem } from '../../store/actions/consoleAction'

const HistoryElement = ({ status, name, id, repeate, request }) => {
    const dispatch = useDispatch()
    const [isCopied, setIsCopied] = useState(false)
    const itemRef = useRef()

    const deleteItem = () => {
        dispatch(deleteHistoryItem(id))
    }

    const elementCopied = () => {
        navigator.clipboard.writeText(request)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1500)
        //itemRef.style.cssText = "top: -45px; opacity: 0.5;"
    }

    return (
        <div className={style.historyElement}>
            {status ? <GreenEllipse /> : <RedEllipse />}
            <div className={style.elementNameContainer}>
                <span className={style.elementName}>{name}</span>
                {isCopied ? (
                    <div ref={itemRef} className={cn(style.elementCopied, !isCopied && style.elementHidden)}>
                        Скопировано
                    </div>
                ) : null}
            </div>
            <Dropdown
                className={cn('dropdown-component', style.dropdownComponent)}
            >
                <Dropdown.Toggle
                    as={React.forwardRef(CustomToggle)}
                    id="dropdown-basic"
                />
                <Dropdown.Menu>
                    <Dropdown.Item
                        onClick={() => repeate(id)}
                        className={style.action}
                    >
                        Выполнить
                    </Dropdown.Item>
                    <Dropdown.Item
                        className={style.action}
                        onClick={() => elementCopied()}
                    >
                        Скопировать
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                        onClick={() => deleteItem()}
                        className={style.delete}
                    >
                        Удалить
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

const CustomToggle = ({ onClick }, ref) => (
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
