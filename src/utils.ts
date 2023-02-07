import { newDiaryEntry, Weather, Visibility } from './types.d'

const parseComment = (commentFromRequets: any): string => {
  if (!isString(commentFromRequets)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequets
}

// comprobando si devuelve un string
const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or messing date')
  }
  return dateFromRequest
}
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or Missing Weather')
  }
  return weatherFromRequest
}

const isWeather = (params: any): boolean => {
  return Object.values(isWeather).includes(params)
}
const isVisibility = (params: any): boolean => {
  return Object.values(isVisibility).includes(params)
}
const parserVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing Visibility')
  }
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parserVisibility(object.visibility)
  }
  return newEntry
}
export default toNewDiaryEntry
