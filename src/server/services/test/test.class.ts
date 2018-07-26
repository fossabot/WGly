import logger from '../../logger'

class Service {
  private options: any

  constructor(options: any) {
    this.options = options || {};
  }

  public async find(params: any): Promise<any> {
    return [];
  }

  public async get(id: number) {
    logger.info('test')
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  public async create(data: any, params: any): Promise<any> {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)));
    }

    return data;
  }

  public async update(id: number, data: any ) {
    return data;
  }

  public async patch(id: number, data: any) {
    return data;
  }

  public async remove(id: number) {
    return { id };
  }
}

export default function(options: any) {
  return new Service(options);
}
