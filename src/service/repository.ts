export class Repository<UserRepository> {
  private userRepos: Record<string, UserRepository> = {};
  private UserRepo;
  
  constructor(userRepository: new () => UserRepository) {
    this.UserRepo = userRepository;
  }
  
  getUserRepository(username: string): UserRepository | undefined {
    return this.userRepos[username];
  }
  
  getOrCreateUserRepository(username: string): UserRepository {
    const existingRepo = this.getUserRepository(username);
    if (existingRepo) {
      return existingRepo;
    }
    const newRepo = new this.UserRepo();
    this.userRepos[username] = newRepo;
  
    return newRepo;
  }
}
