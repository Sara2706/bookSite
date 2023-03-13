import './catogry.scss'

function Catogry({setCatogryValue}) {
  return (
    <div className='catogry'>
      <h4>Catogory</h4>
      <div className="catogryList">
        <p onClick={()=>setCatogryValue(null)}>All</p>
        <p onClick={()=>setCatogryValue('fantasy')}>Fantasy</p>
        <p onClick={()=>setCatogryValue('crime')}>Crime</p>
        <p onClick={()=>setCatogryValue('adventure')}>Adventure</p>
        <p onClick={()=>setCatogryValue('biography')}>Biography</p>
        <p onClick={()=>setCatogryValue('tt')}>Time Travel</p>
        
      </div>
    </div>
  )
}

export default Catogry