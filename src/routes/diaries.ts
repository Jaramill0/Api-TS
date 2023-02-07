import express from 'express' // ESModules
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})
router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  // return ternario al regresar un objeto excluido
  return (diary != null)
    ? res.send(diary?.comment)
    : res.sendStatus(404)
})
// integrando post de servicios de mostrar el clima mediante un json
router.post('/', (req, res) => {
  // integrando try catch para devolver la informacion correcta los tipos de cada una de los objetos
  try {
    let newDiaryEntry = toNewDiaryEntry(req.body)

    newDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(newDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
