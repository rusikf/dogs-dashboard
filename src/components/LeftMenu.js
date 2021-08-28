import React from 'react';
import { Layout, Typography } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

const { Title } = Typography
const { Sider } = Layout;

export default function LeftMenu() {
  const searchedBreeds = useSelector(state => state.breed.searchedBreeds)
  const allBreeds = useSelector(state => state.breed.allBreeds)
    .filter(breed => searchedBreeds.includes(breed))
  const breedsTree = useSelector(state => state.breed.breedsTree)
  const allDogs = useSelector(state => state.dogs.allDogs)
  const dispatch = useDispatch()
  const filteredBreed = useSelector(state => state.breed.filteredBreed)
  if (searchedBreeds.length === 0) {
    return null
  }

  const handleClick = (filteredValue) => {
    let breedPayload
    let dogsPayload

    breedPayload = filteredValue

    if (filteredValue === 'all') {
      dogsPayload = allDogs
    } else {

      const filteredParentValues = Object.entries(breedsTree).find(([key, values]) => {
        return allBreeds.includes(key) && values.includes(filteredValue)
      })
      const filteredParentValue = (filteredParentValues || [])[0]


      dogsPayload = allDogs.filter(dog => {
        const breedMatched = dog.breed === filteredValue
        const subBreedMatched = dog.breed === filteredParentValue

        if (breedMatched || subBreedMatched) {
          return true
        }
        return false
      })
    }

    dispatch({ type: 'UPDATE_FILTERED_BREED', payload: breedPayload })
    dispatch({ type: 'UPDATE_DOGS', payload: dogsPayload })
  }

  const activeClassFor = (breed) => {
    return breed === filteredBreed ? 'bold-text' : ''
  }

  const hasSubMenu = (breed) => {
    return breedsTree[breed] && breedsTree[breed].length > 0
  }

  const menuItems = ['all'].concat(allBreeds).map(breed => {
    if (hasSubMenu(breed)) {
      return (
        <li key={breed}><a className={ activeClassFor(breed) } href='/#' onClick={ () => handleClick(breed) } >{ breed }</a>
        <ul>
          { breedsTree[breed].map(subMenu => {
            return (<li key={subMenu}><a href='/#' className={ activeClassFor(subMenu) } onClick={() => handleClick(subMenu)}>{ subMenu }</a></li>)
          })}
        </ul>
        </li>
      )
    }
    return (
      <li key={breed}>
        <a href='/#' className={ activeClassFor(breed) } onClick={ () => handleClick(breed) }>{ breed }</a>
      </li>)
  })

  return (
    <Sider width={200} className="site-layout-background" style={{ backgroundColor: 'white' }}>
      <Title level={5} style={{ display: 'flex', justifyContent: 'center' }}>Filters</Title>
      <ul>
        { menuItems }
      </ul>
    </Sider>
  )
}