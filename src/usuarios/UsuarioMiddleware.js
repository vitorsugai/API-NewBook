export default class UsuarioMiddleware {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async usuarioExiste(req, res, next) {
    const usuario = await this.usuarioRepository.getById(req.params.id)
    
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    req.usuario = usuario;
    next();
  }
}