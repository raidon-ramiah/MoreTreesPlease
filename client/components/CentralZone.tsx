import Growth from './Growth'
import SeedPlant from './SeedPlant'

export default function CentralZone({ onZoneClick, seeds, imageSource }) {
  function handleOnClick() {
    console.log('Home')
    {
      onZoneClick('home')
    }
  }
  console.log(seeds.seeds)

  return (
    <>
      <button onClick={handleOnClick}> HOME </button>
      <div>
        {' '}
        {/* <img src="images/terrain02.jpg" /> */}
        <SeedPlant seeds={seeds.seeds} imageSource={imageSource}/>
        <Growth seeds/>
      </div>
    </>
  )
}
