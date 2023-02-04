import { DiaryEntry, NoSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries'

const diaries: DiaryEntry[] = diaryData

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const addEntry = (): undefined => undefined
