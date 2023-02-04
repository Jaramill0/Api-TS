import express from 'express' // ESModules
import * as diaryServices from '../services/diaryServices'

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

router.post('/', (_req, res) => {
  res.send('Saving a diary!')
})

export default router
