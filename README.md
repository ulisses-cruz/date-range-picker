# Date Range Picker
React component for selecting date ranges. Can be dropped inside a project as a git submodule.

![image](https://user-images.githubusercontent.com/11726278/82681293-b957e880-9c34-11ea-90c5-507a7f91e6c4.png)

## Requirements
- __[sass]__: `yarn add node-sass` or `npm install node-sass`
- __[moment.js]__: `yarn add moment` or `npm install moment`
- __[react-icons]__: `yarn add react-icons` or `npm install react-icons`

## Installation
Go to your components folder and run the following command:
```
git submodule add https://github.com/ulnitek/date-range-picker.git
```

## Usage
```
import DateRangePicker from './components/date_range_picker/'

export default App() {
  return (
    <DateRangePicker />
  )
}
```

[sass]: https://sass-lang.com/ "css with superpowers"
[moment.js]: https://github.com/moment/moment/ "Parse, validate, manipulate, and display dates and times in JavaScript."
[react-icons]: https://github.com/react-icons/react-icons "svg react icons of popular icon packs"
