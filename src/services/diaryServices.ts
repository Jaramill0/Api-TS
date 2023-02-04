import { DiaryEntry, NoSensitiveInfoDiaryEntry} from '../types'
import diaryData from './diaries'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => diaries

export const addEntry = (): undefined => undefined

