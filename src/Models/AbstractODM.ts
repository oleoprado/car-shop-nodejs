import { isValidObjectId, Model, model, models, Schema } from 'mongoose';
import IdInvalidError from '../Errors/IdInvalidError';

export default abstract class AbstractODM<T> {
  protected model;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] as Model<T>
      || model(this.modelName, this.schema) as Model<T>;
  }

  public async create(dto: T): Promise<T> {
    return this.model.create({ ...dto });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new IdInvalidError('Invalid mongo id');
    return this.model.findById(id);
  }

  public async update(id: string, dto: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw new IdInvalidError('Invalid mongo id');

    return this.model.findByIdAndUpdate(
      { id },
      { ...dto },
      { new: true },
    );
  }

  public async delete(id: string): Promise<void> {
    await this.model.findByIdAndRemove({ id });
  }
}