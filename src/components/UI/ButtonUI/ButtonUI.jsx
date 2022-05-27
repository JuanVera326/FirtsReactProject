
export const ButtonUI = ({style,event,texts}) => {
  
  return (
    <div>
        <button onClick={event} className={style}>{texts}</button>
    </div>
  )
}
