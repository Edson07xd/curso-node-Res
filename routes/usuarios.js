const {Router} = require ('express');
const { usuariosGet } = require('../controllers/usuarios');
const { usuariosPost } = require('../controllers/usuarios');
const { usuariosPut } = require('../controllers/usuarios');
const { usuariosPatch } = require('../controllers/usuarios');
const { usuariosDelete } = require('../controllers/usuarios')

const router = Router ();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

  
router.put('/:id', usuariosPut);


router.delete('/',usuariosDelete);

router.patch('/', usuariosPatch);



module.exports = router;