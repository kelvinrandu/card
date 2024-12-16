# React Card

This is a card template library designed with [React](https://react.dev)  and  [Chakra ui](https://www.chakra-ui.com) .
## Prerequite
[Chakra ui](https://www.chakra-ui.com)
[React](https://react.dev) 

## Installation



    npm i @randukelvin/card
    yarn add @randukelvin/card


## Usage


You can use it as follows:



```js

import { Card } from '@randukelvin/card'

function App() {


  return <Card name='Chill Spot' src='https://bit.ly/2Z4KKcF' alt='Rear view of modern home' badge='restaurants' rating={5} reviewCount={34} />
}

export default App




```

## Props

| Props        | Type        | Description |
| ------------- |:-------------:| -----:|
| name   |   string  |  name of product      | 
| src   |  string   |  image source      | 
| badge   |  string   |  string to be shown in badge    | 
| alt   |   string  |  alt string of image    | 
| distance   | string    |  distance i.e 1km away      | 
| rating   | number    |  1-5     | 
| reviewCount   | number    |  review number    | 
