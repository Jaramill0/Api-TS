export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'OK' | 'poor'
//una interfaces esta pensada para ser extendida con otro contrato
export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'| 'date'|'weather' |'visibility'>