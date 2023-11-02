import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password",
    role = "role",
    address = "address"
}

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    price = "price",
    discountPrice = "discountPrice"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum OrderItemScalarFieldEnum {
    id = "id",
    quantity = "quantity",
    orderId = "orderId",
    productId = "productId"
}

export enum OrderScalarFieldEnum {
    id = "id",
    total = "total",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}

export enum ImageScalarFieldEnum {
    id = "id",
    title = "title",
    img = "img",
    productId = "productId"
}

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}

registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
registerEnumType(ImageScalarFieldEnum, { name: 'ImageScalarFieldEnum', description: undefined })
registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
registerEnumType(OrderItemScalarFieldEnum, { name: 'OrderItemScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateCategory {
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregate>;
}

@ArgsType()
export class CategoryAggregateArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@InputType()
export class CategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}

@ObjectType()
export class CategoryCount {
    @Field(() => Int, {nullable:false})
    products?: number;
}

@InputType()
export class CategoryCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryCreateNestedManyWithoutProductsInput {
    @Field(() => [CategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutProductsInput)
    create?: Array<CategoryCreateWithoutProductsInput>;
    @Field(() => [CategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
}

@InputType()
export class CategoryCreateOrConnectWithoutProductsInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutProductsInput)
    create!: InstanceType<typeof CategoryCreateWithoutProductsInput>;
}

@InputType()
export class CategoryCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutCategoryInput>;
}

@ArgsType()
export class CategoryGroupByArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithAggregationInput>;
    @Field(() => [CategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoryScalarFieldEnum>;
    @Field(() => CategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@ObjectType()
export class CategoryGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregate>;
}

@InputType()
export class CategoryListRelationFilter {
    @Field(() => CategoryWhereInput, {nullable:true})
    every?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    some?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    none?: InstanceType<typeof CategoryWhereInput>;
}

@InputType()
export class CategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
}

@ObjectType()
export class CategoryMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}

@InputType()
export class CategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
}

@ObjectType()
export class CategoryMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}

@InputType()
export class CategoryOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => CategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountOrderByAggregateInput>;
    @Field(() => CategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxOrderByAggregateInput>;
    @Field(() => CategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinOrderByAggregateInput>;
}

@InputType()
export class CategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}

@InputType()
export class CategoryScalarWhereWithAggregatesInput {
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class CategoryScalarWhereInput {
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    AND?: Array<CategoryScalarWhereInput>;
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    OR?: Array<CategoryScalarWhereInput>;
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class CategoryUncheckedCreateNestedManyWithoutProductsInput {
    @Field(() => [CategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutProductsInput)
    create?: Array<CategoryCreateWithoutProductsInput>;
    @Field(() => [CategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
}

@InputType()
export class CategoryUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCategoryInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyWithoutProductsNestedInput {
    @Field(() => [CategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutProductsInput)
    create?: Array<CategoryCreateWithoutProductsInput>;
    @Field(() => [CategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => [CategoryUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    @Field(() => [CategoryUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [CategoryUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
}

@InputType()
export class CategoryUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateManyWithWhereWithoutProductsInput {
    @Field(() => CategoryScalarWhereInput, {nullable:false})
    @Type(() => CategoryScalarWhereInput)
    where!: InstanceType<typeof CategoryScalarWhereInput>;
    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoryUpdateManyMutationInput)
    data!: InstanceType<typeof CategoryUpdateManyMutationInput>;
}

@InputType()
export class CategoryUpdateManyWithoutProductsNestedInput {
    @Field(() => [CategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutProductsInput)
    create?: Array<CategoryCreateWithoutProductsInput>;
    @Field(() => [CategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => [CategoryUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
    @Field(() => [CategoryUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [CategoryUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutProductsInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    @Field(() => CategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutProductsInput)
    data!: InstanceType<typeof CategoryUpdateWithoutProductsInput>;
}

@InputType()
export class CategoryUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutCategoryNestedInput>;
}

@InputType()
export class CategoryUpsertWithWhereUniqueWithoutProductsInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    @Field(() => CategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutProductsInput)
    update!: InstanceType<typeof CategoryUpdateWithoutProductsInput>;
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutProductsInput)
    create!: InstanceType<typeof CategoryCreateWithoutProductsInput>;
}

@InputType()
export class CategoryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@InputType()
export class CategoryWhereInput {
    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@ObjectType()
export class Category {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description!: string | null;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => CategoryCount, {nullable:false})
    _count?: InstanceType<typeof CategoryCount>;
}

@ArgsType()
export class CreateManyCategoryArgs {
    @Field(() => [CategoryCreateManyInput], {nullable:false})
    @Type(() => CategoryCreateManyInput)
    data!: Array<CategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCategoryArgs {
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    data!: InstanceType<typeof CategoryCreateInput>;
}

@ArgsType()
export class DeleteManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class DeleteOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCategoryOrThrowArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCategoryOrThrowArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCategoryArgs {
    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoryUpdateManyMutationInput)
    data!: InstanceType<typeof CategoryUpdateManyMutationInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class UpdateOneCategoryArgs {
    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    data!: InstanceType<typeof CategoryUpdateInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    create!: InstanceType<typeof CategoryCreateInput>;
    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    update!: InstanceType<typeof CategoryUpdateInput>;
}

@ObjectType()
export class AggregateImage {
    @Field(() => ImageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ImageCountAggregate>;
    @Field(() => ImageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ImageMinAggregate>;
    @Field(() => ImageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ImageMaxAggregate>;
}

@ArgsType()
export class CreateManyImageArgs {
    @Field(() => [ImageCreateManyInput], {nullable:false})
    @Type(() => ImageCreateManyInput)
    data!: Array<ImageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneImageArgs {
    @Field(() => ImageCreateInput, {nullable:false})
    @Type(() => ImageCreateInput)
    data!: InstanceType<typeof ImageCreateInput>;
}

@ArgsType()
export class DeleteManyImageArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    where?: InstanceType<typeof ImageWhereInput>;
}

@ArgsType()
export class DeleteOneImageArgs {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstImageOrThrowArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithRelationInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImageScalarFieldEnum>;
}

@ArgsType()
export class FindFirstImageArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithRelationInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImageScalarFieldEnum>;
}

@ArgsType()
export class FindManyImageArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithRelationInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImageScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueImageOrThrowArgs {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueImageArgs {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ImageAggregateArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithRelationInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ImageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ImageCountAggregateInput>;
    @Field(() => ImageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ImageMinAggregateInput>;
    @Field(() => ImageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ImageMaxAggregateInput>;
}

@InputType()
export class ImageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    img?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ImageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    img!: number;
    @HideField()
    productId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ImageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class ImageCreateManyProductInputEnvelope {
    @Field(() => [ImageCreateManyProductInput], {nullable:false})
    @Type(() => ImageCreateManyProductInput)
    data!: Array<ImageCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ImageCreateManyProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img!: string;
}

@InputType()
export class ImageCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class ImageCreateNestedManyWithoutProductInput {
    @Field(() => [ImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateWithoutProductInput)
    create?: Array<ImageCreateWithoutProductInput>;
    @Field(() => [ImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;
    @Field(() => ImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyProductInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
}

@InputType()
export class ImageCreateOrConnectWithoutProductInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
    @Field(() => ImageCreateWithoutProductInput, {nullable:false})
    @Type(() => ImageCreateWithoutProductInput)
    create!: InstanceType<typeof ImageCreateWithoutProductInput>;
}

@InputType()
export class ImageCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img!: string;
}

@InputType()
export class ImageCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img!: string;
    @Field(() => ProductCreateNestedOneWithoutImagesInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutImagesInput>;
}

@ArgsType()
export class ImageGroupByArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithAggregationInput>;
    @Field(() => [ImageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ImageScalarFieldEnum>;
    @Field(() => ImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ImageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ImageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ImageCountAggregateInput>;
    @Field(() => ImageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ImageMinAggregateInput>;
    @Field(() => ImageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ImageMaxAggregateInput>;
}

@ObjectType()
export class ImageGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img!: string;
    @HideField()
    productId?: string;
    @Field(() => ImageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ImageCountAggregate>;
    @Field(() => ImageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ImageMinAggregate>;
    @Field(() => ImageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ImageMaxAggregate>;
}

@InputType()
export class ImageListRelationFilter {
    @Field(() => ImageWhereInput, {nullable:true})
    every?: InstanceType<typeof ImageWhereInput>;
    @Field(() => ImageWhereInput, {nullable:true})
    some?: InstanceType<typeof ImageWhereInput>;
    @Field(() => ImageWhereInput, {nullable:true})
    none?: InstanceType<typeof ImageWhereInput>;
}

@InputType()
export class ImageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    img?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
}

@ObjectType()
export class ImageMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img?: string;
    @HideField()
    productId?: string;
}

@InputType()
export class ImageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class ImageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    img?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
}

@ObjectType()
export class ImageMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img?: string;
    @HideField()
    productId?: string;
}

@InputType()
export class ImageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class ImageOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ImageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    title?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    productId?: InstanceType<typeof SortOrderInput>;
    @Field(() => ImageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ImageCountOrderByAggregateInput>;
    @Field(() => ImageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ImageMaxOrderByAggregateInput>;
    @Field(() => ImageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ImageMinOrderByAggregateInput>;
}

@InputType()
export class ImageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    title?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    productId?: InstanceType<typeof SortOrderInput>;
    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: InstanceType<typeof ProductOrderByWithRelationInput>;
}

@InputType()
export class ImageScalarWhereWithAggregatesInput {
    @Field(() => [ImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ImageScalarWhereWithAggregatesInput>;
    @Field(() => [ImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ImageScalarWhereWithAggregatesInput>;
    @Field(() => [ImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ImageScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    img?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class ImageScalarWhereInput {
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    AND?: Array<ImageScalarWhereInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    OR?: Array<ImageScalarWhereInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    NOT?: Array<ImageScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    title?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    img?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class ImageUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [ImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateWithoutProductInput)
    create?: Array<ImageCreateWithoutProductInput>;
    @Field(() => [ImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;
    @Field(() => ImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyProductInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
}

@InputType()
export class ImageUncheckedCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img!: string;
}

@InputType()
export class ImageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class ImageUncheckedUpdateManyWithoutProductNestedInput {
    @Field(() => [ImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateWithoutProductInput)
    create?: Array<ImageCreateWithoutProductInput>;
    @Field(() => [ImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;
    @Field(() => [ImageUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => ImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyProductInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
    @Field(() => [ImageUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [ImageUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}

@InputType()
export class ImageUncheckedUpdateManyWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ImageUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ImageUncheckedUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ImageUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ImageUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ImageUpdateManyWithWhereWithoutProductInput {
    @Field(() => ImageScalarWhereInput, {nullable:false})
    @Type(() => ImageScalarWhereInput)
    where!: InstanceType<typeof ImageScalarWhereInput>;
    @Field(() => ImageUpdateManyMutationInput, {nullable:false})
    @Type(() => ImageUpdateManyMutationInput)
    data!: InstanceType<typeof ImageUpdateManyMutationInput>;
}

@InputType()
export class ImageUpdateManyWithoutProductNestedInput {
    @Field(() => [ImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateWithoutProductInput)
    create?: Array<ImageCreateWithoutProductInput>;
    @Field(() => [ImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;
    @Field(() => [ImageUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => ImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyProductInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id'>>;
    @Field(() => [ImageUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [ImageUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}

@InputType()
export class ImageUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
    @Field(() => ImageUpdateWithoutProductInput, {nullable:false})
    @Type(() => ImageUpdateWithoutProductInput)
    data!: InstanceType<typeof ImageUpdateWithoutProductInput>;
}

@InputType()
export class ImageUpdateWithoutProductInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ImageUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateOneWithoutImagesNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutImagesNestedInput>;
}

@InputType()
export class ImageUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
    @Field(() => ImageUpdateWithoutProductInput, {nullable:false})
    @Type(() => ImageUpdateWithoutProductInput)
    update!: InstanceType<typeof ImageUpdateWithoutProductInput>;
    @Field(() => ImageCreateWithoutProductInput, {nullable:false})
    @Type(() => ImageCreateWithoutProductInput)
    create!: InstanceType<typeof ImageCreateWithoutProductInput>;
}

@InputType()
export class ImageWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ImageWhereInput], {nullable:true})
    AND?: Array<ImageWhereInput>;
    @Field(() => [ImageWhereInput], {nullable:true})
    OR?: Array<ImageWhereInput>;
    @Field(() => [ImageWhereInput], {nullable:true})
    NOT?: Array<ImageWhereInput>;
    @Field(() => StringNullableFilter, {nullable:true})
    title?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    img?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ProductNullableRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductNullableRelationFilter>;
}

@InputType()
export class ImageWhereInput {
    @Field(() => [ImageWhereInput], {nullable:true})
    AND?: Array<ImageWhereInput>;
    @Field(() => [ImageWhereInput], {nullable:true})
    OR?: Array<ImageWhereInput>;
    @Field(() => [ImageWhereInput], {nullable:true})
    NOT?: Array<ImageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    title?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    img?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    productId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ProductNullableRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductNullableRelationFilter>;
}

@ObjectType()
export class Image {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string | null;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    img!: string;
    @HideField()
    productId!: string | null;
    @HideField()
    product?: InstanceType<typeof Product> | null;
}

@ArgsType()
export class UpdateManyImageArgs {
    @Field(() => ImageUpdateManyMutationInput, {nullable:false})
    @Type(() => ImageUpdateManyMutationInput)
    data!: InstanceType<typeof ImageUpdateManyMutationInput>;
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    where?: InstanceType<typeof ImageWhereInput>;
}

@ArgsType()
export class UpdateOneImageArgs {
    @Field(() => ImageUpdateInput, {nullable:false})
    @Type(() => ImageUpdateInput)
    data!: InstanceType<typeof ImageUpdateInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneImageArgs {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id'>;
    @Field(() => ImageCreateInput, {nullable:false})
    @Type(() => ImageCreateInput)
    create!: InstanceType<typeof ImageCreateInput>;
    @Field(() => ImageUpdateInput, {nullable:false})
    @Type(() => ImageUpdateInput)
    update!: InstanceType<typeof ImageUpdateInput>;
}

@ObjectType()
export class AggregateOrder {
    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregate>;
    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgAggregate>;
    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OrderSumAggregate>;
    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregate>;
    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregate>;
}

@ArgsType()
export class CreateManyOrderArgs {
    @Field(() => [OrderCreateManyInput], {nullable:false})
    @Type(() => OrderCreateManyInput)
    data!: Array<OrderCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneOrderArgs {
    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    data!: InstanceType<typeof OrderCreateInput>;
}

@ArgsType()
export class DeleteManyOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
}

@ArgsType()
export class DeleteOneOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstOrderOrThrowArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindFirstOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindManyOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueOrderOrThrowArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class OrderAggregateArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    @Field(() => OrderAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgAggregateInput>;
    @Field(() => OrderSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderSumAggregateInput>;
    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}

@InputType()
export class OrderAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    total?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class OrderAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    total?: number;
    @HideField()
    userId?: number;
}

@InputType()
export class OrderAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class OrderCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    total?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class OrderCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @HideField()
    userId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class OrderCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@ObjectType()
export class OrderCount {
    @Field(() => Int, {nullable:false})
    items?: number;
}

@InputType()
export class OrderCreateManyUserInputEnvelope {
    @Field(() => [OrderCreateManyUserInput], {nullable:false})
    @Type(() => OrderCreateManyUserInput)
    data!: Array<OrderCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class OrderCreateManyUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class OrderCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class OrderCreateNestedManyWithoutUserInput {
    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;
    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
}

@InputType()
export class OrderCreateNestedOneWithoutItemsInput {
    @Field(() => OrderCreateWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateWithoutItemsInput)
    create?: InstanceType<typeof OrderCreateWithoutItemsInput>;
    @Field(() => OrderCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutItemsInput)
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutItemsInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@InputType()
export class OrderCreateOrConnectWithoutItemsInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderCreateWithoutItemsInput, {nullable:false})
    @Type(() => OrderCreateWithoutItemsInput)
    create!: InstanceType<typeof OrderCreateWithoutItemsInput>;
}

@InputType()
export class OrderCreateOrConnectWithoutUserInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderCreateWithoutUserInput, {nullable:false})
    @Type(() => OrderCreateWithoutUserInput)
    create!: InstanceType<typeof OrderCreateWithoutUserInput>;
}

@InputType()
export class OrderCreateWithoutItemsInput {
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutOrdersInput, {nullable:true})
    User?: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
}

@InputType()
export class OrderCreateWithoutUserInput {
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderItemCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: InstanceType<typeof OrderItemCreateNestedManyWithoutOrderInput>;
}

@InputType()
export class OrderCreateInput {
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutOrdersInput, {nullable:true})
    User?: InstanceType<typeof UserCreateNestedOneWithoutOrdersInput>;
    @Field(() => OrderItemCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: InstanceType<typeof OrderItemCreateNestedManyWithoutOrderInput>;
}

@ArgsType()
export class OrderGroupByArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithAggregationInput>;
    @Field(() => [OrderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderScalarFieldEnum>;
    @Field(() => OrderScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof OrderScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    @Field(() => OrderAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgAggregateInput>;
    @Field(() => OrderSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderSumAggregateInput>;
    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}

@ObjectType()
export class OrderGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Date, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @HideField()
    userId?: number;
    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregate>;
    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgAggregate>;
    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OrderSumAggregate>;
    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregate>;
    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregate>;
}

@InputType()
export class OrderListRelationFilter {
    @Field(() => OrderWhereInput, {nullable:true})
    every?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    some?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    none?: InstanceType<typeof OrderWhereInput>;
}

@InputType()
export class OrderMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    total?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class OrderMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    total?: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @HideField()
    userId?: number;
}

@InputType()
export class OrderMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class OrderMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    total?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class OrderMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    total?: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @HideField()
    userId?: number;
}

@InputType()
export class OrderMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class OrderOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class OrderOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => OrderCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountOrderByAggregateInput>;
    @Field(() => OrderAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderAvgOrderByAggregateInput>;
    @Field(() => OrderMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxOrderByAggregateInput>;
    @Field(() => OrderMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinOrderByAggregateInput>;
    @Field(() => OrderSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderSumOrderByAggregateInput>;
}

@InputType()
export class OrderOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    userId?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    items?: InstanceType<typeof OrderItemOrderByRelationAggregateInput>;
}

@InputType()
export class OrderRelationFilter {
    @Field(() => OrderWhereInput, {nullable:true})
    is?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    isNot?: InstanceType<typeof OrderWhereInput>;
}

@InputType()
export class OrderScalarWhereWithAggregatesInput {
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    total?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}

@InputType()
export class OrderScalarWhereInput {
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    AND?: Array<OrderScalarWhereInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    OR?: Array<OrderScalarWhereInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    NOT?: Array<OrderScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    total?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    userId?: InstanceType<typeof IntNullableFilter>;
}

@InputType()
export class OrderSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    total?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class OrderSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    total?: number;
    @HideField()
    userId?: number;
}

@InputType()
export class OrderSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class OrderUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;
    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
}

@InputType()
export class OrderUncheckedCreateWithoutItemsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
}

@InputType()
export class OrderUncheckedCreateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutOrderInput>;
}

@InputType()
export class OrderUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    total!: number;
    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    userId?: number;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutOrderInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutOrderInput>;
}

@InputType()
export class OrderUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;
    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUncheckedUpdateManyWithoutUserInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class OrderUncheckedUpdateWithoutItemsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class OrderUncheckedUpdateWithoutUserInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutOrderNestedInput>;
}

@InputType()
export class OrderUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutOrderNestedInput>;
}

@InputType()
export class OrderUpdateManyMutationInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class OrderUpdateManyWithWhereWithoutUserInput {
    @Field(() => OrderScalarWhereInput, {nullable:false})
    @Type(() => OrderScalarWhereInput)
    where!: InstanceType<typeof OrderScalarWhereInput>;
    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: InstanceType<typeof OrderUpdateManyMutationInput>;
}

@InputType()
export class OrderUpdateManyWithoutUserNestedInput {
    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateWithoutUserInput)
    create?: Array<OrderCreateWithoutUserInput>;
    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;
    @Field(() => [OrderUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof OrderCreateManyUserInputEnvelope>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
    @Field(() => [OrderUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [OrderUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}

@InputType()
export class OrderUpdateOneRequiredWithoutItemsNestedInput {
    @Field(() => OrderCreateWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateWithoutItemsInput)
    create?: InstanceType<typeof OrderCreateWithoutItemsInput>;
    @Field(() => OrderCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutItemsInput)
    connectOrCreate?: InstanceType<typeof OrderCreateOrConnectWithoutItemsInput>;
    @Field(() => OrderUpsertWithoutItemsInput, {nullable:true})
    @Type(() => OrderUpsertWithoutItemsInput)
    upsert?: InstanceType<typeof OrderUpsertWithoutItemsInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutItemsInput)
    update?: InstanceType<typeof OrderUpdateToOneWithWhereWithoutItemsInput>;
}

@InputType()
export class OrderUpdateToOneWithWhereWithoutItemsInput {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => OrderUpdateWithoutItemsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutItemsInput)
    data!: InstanceType<typeof OrderUpdateWithoutItemsInput>;
}

@InputType()
export class OrderUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderUpdateWithoutUserInput, {nullable:false})
    @Type(() => OrderUpdateWithoutUserInput)
    data!: InstanceType<typeof OrderUpdateWithoutUserInput>;
}

@InputType()
export class OrderUpdateWithoutItemsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutOrdersNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateOneWithoutOrdersNestedInput>;
}

@InputType()
export class OrderUpdateWithoutUserInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => OrderItemUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUpdateManyWithoutOrderNestedInput>;
}

@InputType()
export class OrderUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutOrdersNestedInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateOneWithoutOrdersNestedInput>;
    @Field(() => OrderItemUpdateManyWithoutOrderNestedInput, {nullable:true})
    items?: InstanceType<typeof OrderItemUpdateManyWithoutOrderNestedInput>;
}

@InputType()
export class OrderUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderUpdateWithoutUserInput, {nullable:false})
    @Type(() => OrderUpdateWithoutUserInput)
    update!: InstanceType<typeof OrderUpdateWithoutUserInput>;
    @Field(() => OrderCreateWithoutUserInput, {nullable:false})
    @Type(() => OrderCreateWithoutUserInput)
    create!: InstanceType<typeof OrderCreateWithoutUserInput>;
}

@InputType()
export class OrderUpsertWithoutItemsInput {
    @Field(() => OrderUpdateWithoutItemsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutItemsInput)
    update!: InstanceType<typeof OrderUpdateWithoutItemsInput>;
    @Field(() => OrderCreateWithoutItemsInput, {nullable:false})
    @Type(() => OrderCreateWithoutItemsInput)
    create!: InstanceType<typeof OrderCreateWithoutItemsInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
}

@InputType()
export class OrderWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    total?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    userId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => UserNullableRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserNullableRelationFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    items?: InstanceType<typeof OrderItemListRelationFilter>;
}

@InputType()
export class OrderWhereInput {
    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    total?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    userId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => UserNullableRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserNullableRelationFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    items?: InstanceType<typeof OrderItemListRelationFilter>;
}

@ObjectType()
export class Order {
    @Field(() => ID, {nullable:false})
    id!: number;
    /**
     * @Validator .@IsInt()
     * @Validator .@Max(100_000)
     * @Validator .@Min(1)
     */
    @Field(() => Int, {nullable:false,description:'@Validator.@IsInt()\n@Validator.@Max(100_000)\n@Validator.@Min(1)'})
    total!: number;
    @Field(() => Date, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @HideField()
    userId!: number | null;
    @Field(() => User, {nullable:true})
    User?: InstanceType<typeof User> | null;
    @Field(() => [OrderItem], {nullable:true})
    items?: Array<OrderItem>;
    @Field(() => OrderCount, {nullable:false})
    _count?: InstanceType<typeof OrderCount>;
}

@ArgsType()
export class UpdateManyOrderArgs {
    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    data!: InstanceType<typeof OrderUpdateManyMutationInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: InstanceType<typeof OrderWhereInput>;
}

@ArgsType()
export class UpdateOneOrderArgs {
    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    data!: InstanceType<typeof OrderUpdateInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    create!: InstanceType<typeof OrderCreateInput>;
    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    update!: InstanceType<typeof OrderUpdateInput>;
}

@ObjectType()
export class AggregateOrderItem {
    @Field(() => OrderItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountAggregate>;
    @Field(() => OrderItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgAggregate>;
    @Field(() => OrderItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumAggregate>;
    @Field(() => OrderItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinAggregate>;
    @Field(() => OrderItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxAggregate>;
}

@ArgsType()
export class CreateManyOrderItemArgs {
    @Field(() => [OrderItemCreateManyInput], {nullable:false})
    @Type(() => OrderItemCreateManyInput)
    data!: Array<OrderItemCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneOrderItemArgs {
    @Field(() => OrderItemCreateInput, {nullable:false})
    @Type(() => OrderItemCreateInput)
    data!: InstanceType<typeof OrderItemCreateInput>;
}

@ArgsType()
export class DeleteManyOrderItemArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
}

@ArgsType()
export class DeleteOneOrderItemArgs {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstOrderItemOrThrowArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderItemScalarFieldEnum>;
}

@ArgsType()
export class FindFirstOrderItemArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderItemScalarFieldEnum>;
}

@ArgsType()
export class FindManyOrderItemArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderItemScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueOrderItemOrThrowArgs {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueOrderItemArgs {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class OrderItemAggregateArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountAggregateInput>;
    @Field(() => OrderItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgAggregateInput>;
    @Field(() => OrderItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumAggregateInput>;
    @Field(() => OrderItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinAggregateInput>;
    @Field(() => OrderItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxAggregateInput>;
}

@InputType()
export class OrderItemAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
}

@ObjectType()
export class OrderItemAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    quantity?: number;
    @HideField()
    orderId?: number;
}

@InputType()
export class OrderItemAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class OrderItemCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @HideField()
    orderId!: number;
    @HideField()
    productId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class OrderItemCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemCreateManyOrderInputEnvelope {
    @Field(() => [OrderItemCreateManyOrderInput], {nullable:false})
    @Type(() => OrderItemCreateManyOrderInput)
    data!: Array<OrderItemCreateManyOrderInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class OrderItemCreateManyOrderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => String, {nullable:false})
    productId!: string;
}

@InputType()
export class OrderItemCreateManyProductInputEnvelope {
    @Field(() => [OrderItemCreateManyProductInput], {nullable:false})
    @Type(() => OrderItemCreateManyProductInput)
    data!: Array<OrderItemCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class OrderItemCreateManyProductInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Int, {nullable:false})
    orderId!: number;
}

@InputType()
export class OrderItemCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Int, {nullable:false})
    orderId!: number;
    @Field(() => String, {nullable:false})
    productId!: string;
}

@InputType()
export class OrderItemCreateNestedManyWithoutOrderInput {
    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;
    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyOrderInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
}

@InputType()
export class OrderItemCreateNestedManyWithoutProductInput {
    @Field(() => [OrderItemCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutProductInput)
    create?: Array<OrderItemCreateWithoutProductInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;
    @Field(() => OrderItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyProductInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
}

@InputType()
export class OrderItemCreateOrConnectWithoutOrderInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemCreateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create!: InstanceType<typeof OrderItemCreateWithoutOrderInput>;
}

@InputType()
export class OrderItemCreateOrConnectWithoutProductInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutProductInput)
    create!: InstanceType<typeof OrderItemCreateWithoutProductInput>;
}

@InputType()
export class OrderItemCreateWithoutOrderInput {
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => ProductCreateNestedOneWithoutOrderItemInput, {nullable:false})
    product!: InstanceType<typeof ProductCreateNestedOneWithoutOrderItemInput>;
}

@InputType()
export class OrderItemCreateWithoutProductInput {
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => OrderCreateNestedOneWithoutItemsInput, {nullable:false})
    order!: InstanceType<typeof OrderCreateNestedOneWithoutItemsInput>;
}

@InputType()
export class OrderItemCreateInput {
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => OrderCreateNestedOneWithoutItemsInput, {nullable:false})
    order!: InstanceType<typeof OrderCreateNestedOneWithoutItemsInput>;
    @Field(() => ProductCreateNestedOneWithoutOrderItemInput, {nullable:false})
    product!: InstanceType<typeof ProductCreateNestedOneWithoutOrderItemInput>;
}

@ArgsType()
export class OrderItemGroupByArgs {
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => [OrderItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithAggregationInput>;
    @Field(() => [OrderItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderItemScalarFieldEnum>;
    @Field(() => OrderItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof OrderItemScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountAggregateInput>;
    @Field(() => OrderItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgAggregateInput>;
    @Field(() => OrderItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumAggregateInput>;
    @Field(() => OrderItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinAggregateInput>;
    @Field(() => OrderItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxAggregateInput>;
}

@ObjectType()
export class OrderItemGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @HideField()
    orderId!: number;
    @HideField()
    productId!: string;
    @Field(() => OrderItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountAggregate>;
    @Field(() => OrderItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgAggregate>;
    @Field(() => OrderItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumAggregate>;
    @Field(() => OrderItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinAggregate>;
    @Field(() => OrderItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxAggregate>;
}

@InputType()
export class OrderItemListRelationFilter {
    @Field(() => OrderItemWhereInput, {nullable:true})
    every?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => OrderItemWhereInput, {nullable:true})
    some?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => OrderItemWhereInput, {nullable:true})
    none?: InstanceType<typeof OrderItemWhereInput>;
}

@InputType()
export class OrderItemMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
}

@ObjectType()
export class OrderItemMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    quantity?: number;
    @HideField()
    orderId?: number;
    @HideField()
    productId?: string;
}

@InputType()
export class OrderItemMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
}

@ObjectType()
export class OrderItemMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    quantity?: number;
    @HideField()
    orderId?: number;
    @HideField()
    productId?: string;
}

@InputType()
export class OrderItemMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => OrderItemCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderItemCountOrderByAggregateInput>;
    @Field(() => OrderItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof OrderItemAvgOrderByAggregateInput>;
    @Field(() => OrderItemMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderItemMaxOrderByAggregateInput>;
    @Field(() => OrderItemMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderItemMinOrderByAggregateInput>;
    @Field(() => OrderItemSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof OrderItemSumOrderByAggregateInput>;
}

@InputType()
export class OrderItemOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: InstanceType<typeof OrderOrderByWithRelationInput>;
    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: InstanceType<typeof ProductOrderByWithRelationInput>;
}

@InputType()
export class OrderItemScalarWhereWithAggregatesInput {
    @Field(() => [OrderItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderItemScalarWhereWithAggregatesInput>;
    @Field(() => [OrderItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderItemScalarWhereWithAggregatesInput>;
    @Field(() => [OrderItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderItemScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    quantity?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    orderId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class OrderItemScalarWhereInput {
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    AND?: Array<OrderItemScalarWhereInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    OR?: Array<OrderItemScalarWhereInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    NOT?: Array<OrderItemScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    orderId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class OrderItemSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    quantity?: true;
    @Field(() => Boolean, {nullable:true})
    orderId?: true;
}

@ObjectType()
export class OrderItemSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    quantity?: number;
    @HideField()
    orderId?: number;
}

@InputType()
export class OrderItemSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemUncheckedCreateNestedManyWithoutOrderInput {
    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;
    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyOrderInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
}

@InputType()
export class OrderItemUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [OrderItemCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutProductInput)
    create?: Array<OrderItemCreateWithoutProductInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;
    @Field(() => OrderItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyProductInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
}

@InputType()
export class OrderItemUncheckedCreateWithoutOrderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => String, {nullable:false})
    productId!: string;
}

@InputType()
export class OrderItemUncheckedCreateWithoutProductInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Int, {nullable:false})
    orderId!: number;
}

@InputType()
export class OrderItemUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:false})
    quantity!: number;
    @Field(() => Int, {nullable:false})
    orderId!: number;
    @Field(() => String, {nullable:false})
    productId!: string;
}

@InputType()
export class OrderItemUncheckedUpdateManyWithoutOrderNestedInput {
    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;
    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>;
    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyOrderInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>;
    @Field(() => [OrderItemUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutOrderInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}

@InputType()
export class OrderItemUncheckedUpdateManyWithoutOrderInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateManyWithoutProductNestedInput {
    @Field(() => [OrderItemCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutProductInput)
    create?: Array<OrderItemCreateWithoutProductInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;
    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => OrderItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyProductInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [OrderItemUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}

@InputType()
export class OrderItemUncheckedUpdateManyWithoutProductInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateWithoutOrderInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateWithoutProductInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    orderId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUpdateManyMutationInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class OrderItemUpdateManyWithWhereWithoutOrderInput {
    @Field(() => OrderItemScalarWhereInput, {nullable:false})
    @Type(() => OrderItemScalarWhereInput)
    where!: InstanceType<typeof OrderItemScalarWhereInput>;
    @Field(() => OrderItemUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderItemUpdateManyMutationInput)
    data!: InstanceType<typeof OrderItemUpdateManyMutationInput>;
}

@InputType()
export class OrderItemUpdateManyWithWhereWithoutProductInput {
    @Field(() => OrderItemScalarWhereInput, {nullable:false})
    @Type(() => OrderItemScalarWhereInput)
    where!: InstanceType<typeof OrderItemScalarWhereInput>;
    @Field(() => OrderItemUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderItemUpdateManyMutationInput)
    data!: InstanceType<typeof OrderItemUpdateManyMutationInput>;
}

@InputType()
export class OrderItemUpdateManyWithoutOrderNestedInput {
    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;
    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>;
    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyOrderInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>;
    @Field(() => [OrderItemUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutOrderInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}

@InputType()
export class OrderItemUpdateManyWithoutProductNestedInput {
    @Field(() => [OrderItemCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutProductInput)
    create?: Array<OrderItemCreateWithoutProductInput>;
    @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;
    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => OrderItemCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof OrderItemCreateManyProductInputEnvelope>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [OrderItemUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutOrderInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemUpdateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutOrderInput)
    data!: InstanceType<typeof OrderItemUpdateWithoutOrderInput>;
}

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutProductInput)
    data!: InstanceType<typeof OrderItemUpdateWithoutProductInput>;
}

@InputType()
export class OrderItemUpdateWithoutOrderInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateOneRequiredWithoutOrderItemNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutOrderItemNestedInput>;
}

@InputType()
export class OrderItemUpdateWithoutProductInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => OrderUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutItemsNestedInput>;
}

@InputType()
export class OrderItemUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => OrderUpdateOneRequiredWithoutItemsNestedInput, {nullable:true})
    order?: InstanceType<typeof OrderUpdateOneRequiredWithoutItemsNestedInput>;
    @Field(() => ProductUpdateOneRequiredWithoutOrderItemNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneRequiredWithoutOrderItemNestedInput>;
}

@InputType()
export class OrderItemUpsertWithWhereUniqueWithoutOrderInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemUpdateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutOrderInput)
    update!: InstanceType<typeof OrderItemUpdateWithoutOrderInput>;
    @Field(() => OrderItemCreateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create!: InstanceType<typeof OrderItemCreateWithoutOrderInput>;
}

@InputType()
export class OrderItemUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutProductInput)
    update!: InstanceType<typeof OrderItemUpdateWithoutProductInput>;
    @Field(() => OrderItemCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutProductInput)
    create!: InstanceType<typeof OrderItemCreateWithoutProductInput>;
}

@InputType()
export class OrderItemWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    AND?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    OR?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    NOT?: Array<OrderItemWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    orderId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => OrderRelationFilter, {nullable:true})
    order?: InstanceType<typeof OrderRelationFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
}

@InputType()
export class OrderItemWhereInput {
    @Field(() => [OrderItemWhereInput], {nullable:true})
    AND?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    OR?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    NOT?: Array<OrderItemWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    orderId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => OrderRelationFilter, {nullable:true})
    order?: InstanceType<typeof OrderRelationFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
}

@ObjectType()
export class OrderItem {
    @Field(() => ID, {nullable:false})
    id!: number;
    /**
     * @Validator .@IsInt()
     * @Validator .@Min(1)
     * @Validator .@Max(50)
     */
    @Field(() => Int, {nullable:false,description:'@Validator.@IsInt()\n@Validator.@Min(1)\n@Validator.@Max(50)'})
    quantity!: number;
    @HideField()
    orderId!: number;
    @HideField()
    productId!: string;
    @Field(() => Order, {nullable:false})
    order?: InstanceType<typeof Order>;
    @Field(() => Product, {nullable:false})
    product?: InstanceType<typeof Product>;
}

@ArgsType()
export class UpdateManyOrderItemArgs {
    @Field(() => OrderItemUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderItemUpdateManyMutationInput)
    data!: InstanceType<typeof OrderItemUpdateManyMutationInput>;
    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: InstanceType<typeof OrderItemWhereInput>;
}

@ArgsType()
export class UpdateOneOrderItemArgs {
    @Field(() => OrderItemUpdateInput, {nullable:false})
    @Type(() => OrderItemUpdateInput)
    data!: InstanceType<typeof OrderItemUpdateInput>;
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneOrderItemArgs {
    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;
    @Field(() => OrderItemCreateInput, {nullable:false})
    @Type(() => OrderItemCreateInput)
    create!: InstanceType<typeof OrderItemCreateInput>;
    @Field(() => OrderItemUpdateInput, {nullable:false})
    @Type(() => OrderItemUpdateInput)
    update!: InstanceType<typeof OrderItemUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateProduct {
    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregate>;
}

@ArgsType()
export class CreateManyProductArgs {
    @Field(() => [ProductCreateManyInput], {nullable:false})
    @Type(() => ProductCreateManyInput)
    data!: Array<ProductCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductArgs {
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    data!: InstanceType<typeof ProductCreateInput>;
}

@ArgsType()
export class DeleteManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class DeleteOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindFirstProductOrThrowArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductOrThrowArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindUniqueProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class ProductAggregateArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@InputType()
export class ProductAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
}

@ObjectType()
export class ProductAvgAggregate {
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => Float, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@InputType()
export class ProductCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    discountPrice!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProductCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@ObjectType()
export class ProductCount {
    @Field(() => Int, {nullable:false})
    images?: number;
    @Field(() => Int, {nullable:false})
    category?: number;
    @Field(() => Int, {nullable:false})
    OrderItem?: number;
}

@InputType()
export class ProductCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductCreateNestedManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class ProductCreateNestedOneWithoutImagesInput {
    @Field(() => ProductCreateWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateWithoutImagesInput)
    create?: InstanceType<typeof ProductCreateWithoutImagesInput>;
    @Field(() => ProductCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutImagesInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutImagesInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}

@InputType()
export class ProductCreateNestedOneWithoutOrderItemInput {
    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create?: InstanceType<typeof ProductCreateWithoutOrderItemInput>;
    @Field(() => ProductCreateOrConnectWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderItemInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutOrderItemInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}

@InputType()
export class ProductCreateOrConnectWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCategoryInput)
    create!: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutImagesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => ProductCreateWithoutImagesInput, {nullable:false})
    @Type(() => ProductCreateWithoutImagesInput)
    create!: InstanceType<typeof ProductCreateWithoutImagesInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutOrderItemInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create!: InstanceType<typeof ProductCreateWithoutOrderItemInput>;
}

@InputType()
export class ProductCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemCreateNestedManyWithoutProductInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => CategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryCreateNestedManyWithoutProductsInput>;
    @Field(() => OrderItemCreateNestedManyWithoutProductInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutOrderItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
    @Field(() => CategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
    @Field(() => CategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryCreateNestedManyWithoutProductsInput>;
    @Field(() => OrderItemCreateNestedManyWithoutProductInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemCreateNestedManyWithoutProductInput>;
}

@ArgsType()
export class ProductGroupByArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithAggregationInput>;
    @Field(() => [ProductScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductScalarFieldEnum>;
    @Field(() => ProductScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@ObjectType()
export class ProductGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregate>;
}

@InputType()
export class ProductListRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
}

@ObjectType()
export class ProductMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@InputType()
export class ProductMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
}

@ObjectType()
export class ProductMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@InputType()
export class ProductNullableRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    is?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProductOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    discountPrice?: InstanceType<typeof SortOrderInput>;
    @Field(() => ProductCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountOrderByAggregateInput>;
    @Field(() => ProductAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgOrderByAggregateInput>;
    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxOrderByAggregateInput>;
    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinOrderByAggregateInput>;
    @Field(() => ProductSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumOrderByAggregateInput>;
}

@InputType()
export class ProductOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    discountPrice?: InstanceType<typeof SortOrderInput>;
    @Field(() => ImageOrderByRelationAggregateInput, {nullable:true})
    images?: InstanceType<typeof ImageOrderByRelationAggregateInput>;
    @Field(() => CategoryOrderByRelationAggregateInput, {nullable:true})
    category?: InstanceType<typeof CategoryOrderByRelationAggregateInput>;
    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemOrderByRelationAggregateInput>;
}

@InputType()
export class ProductRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    is?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductScalarWhereWithAggregatesInput {
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntNullableWithAggregatesFilter>;
}

@InputType()
export class ProductScalarWhereInput {
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntNullableFilter>;
}

@InputType()
export class ProductSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
}

@ObjectType()
export class ProductSumAggregate {
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class ProductUncheckedCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => CategoryUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutOrderItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => CategoryUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUncheckedCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => CategoryUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    category?: InstanceType<typeof CategoryUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => OrderItemUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemUncheckedCreateNestedManyWithoutProductInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutCategoryNestedInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutImagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => CategoryUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutOrderItemInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => CategoryUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUncheckedUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => CategoryUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => OrderItemUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemUncheckedUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutCategoryInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithoutCategoryNestedInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateOneRequiredWithoutOrderItemNestedInput {
    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create?: InstanceType<typeof ProductCreateWithoutOrderItemInput>;
    @Field(() => ProductCreateOrConnectWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderItemInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutOrderItemInput>;
    @Field(() => ProductUpsertWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductUpsertWithoutOrderItemInput)
    upsert?: InstanceType<typeof ProductUpsertWithoutOrderItemInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => ProductUpdateToOneWithWhereWithoutOrderItemInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutOrderItemInput)
    update?: InstanceType<typeof ProductUpdateToOneWithWhereWithoutOrderItemInput>;
}

@InputType()
export class ProductUpdateOneWithoutImagesNestedInput {
    @Field(() => ProductCreateWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateWithoutImagesInput)
    create?: InstanceType<typeof ProductCreateWithoutImagesInput>;
    @Field(() => ProductCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutImagesInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutImagesInput>;
    @Field(() => ProductUpsertWithoutImagesInput, {nullable:true})
    @Type(() => ProductUpsertWithoutImagesInput)
    upsert?: InstanceType<typeof ProductUpsertWithoutImagesInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    disconnect?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    delete?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => ProductUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutImagesInput)
    update?: InstanceType<typeof ProductUpdateToOneWithWhereWithoutImagesInput>;
}

@InputType()
export class ProductUpdateToOneWithWhereWithoutImagesInput {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutImagesInput)
    data!: InstanceType<typeof ProductUpdateWithoutImagesInput>;
}

@InputType()
export class ProductUpdateToOneWithWhereWithoutOrderItemInput {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductUpdateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderItemInput)
    data!: InstanceType<typeof ProductUpdateWithoutOrderItemInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoryInput)
    data!: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
}

@InputType()
export class ProductUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateWithoutImagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => CategoryUpdateManyWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateManyWithoutProductsNestedInput>;
    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateWithoutOrderItemInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
    @Field(() => CategoryUpdateManyWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
    @Field(() => CategoryUpdateManyWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateManyWithoutProductsNestedInput>;
    @Field(() => OrderItemUpdateManyWithoutProductNestedInput, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoryInput)
    update!: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCategoryInput)
    create!: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}

@InputType()
export class ProductUpsertWithoutImagesInput {
    @Field(() => ProductUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutImagesInput)
    update!: InstanceType<typeof ProductUpdateWithoutImagesInput>;
    @Field(() => ProductCreateWithoutImagesInput, {nullable:false})
    @Type(() => ProductCreateWithoutImagesInput)
    create!: InstanceType<typeof ProductCreateWithoutImagesInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductUpsertWithoutOrderItemInput {
    @Field(() => ProductUpdateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderItemInput)
    update!: InstanceType<typeof ProductUpdateWithoutOrderItemInput>;
    @Field(() => ProductCreateWithoutOrderItemInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderItemInput)
    create!: InstanceType<typeof ProductCreateWithoutOrderItemInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntNullableFilter>;
    @Field(() => ImageListRelationFilter, {nullable:true})
    images?: InstanceType<typeof ImageListRelationFilter>;
    @Field(() => CategoryListRelationFilter, {nullable:true})
    category?: InstanceType<typeof CategoryListRelationFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemListRelationFilter>;
}

@InputType()
export class ProductWhereInput {
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntNullableFilter>;
    @Field(() => ImageListRelationFilter, {nullable:true})
    images?: InstanceType<typeof ImageListRelationFilter>;
    @Field(() => CategoryListRelationFilter, {nullable:true})
    category?: InstanceType<typeof CategoryListRelationFilter>;
    @Field(() => OrderItemListRelationFilter, {nullable:true})
    OrderItem?: InstanceType<typeof OrderItemListRelationFilter>;
}

@ObjectType()
export class Product {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    /**
     * @Validator .@IsInt()
     * @Validator .@Min(1)
     * @Validator .@Max(100_000)
     */
    @Field(() => Int, {nullable:false,description:'@Validator.@IsInt()\n@Validator.@Min(1)\n@Validator.@Max(100_000)'})
    price!: number;
    /**
     * @Validator .@IsInt()
     * @Validator .@Min(1)
     * @Validator .@Max(100_000)
     */
    @Field(() => Int, {nullable:true,description:'@Validator.@IsInt()\n@Validator.@Min(1)\n@Validator.@Max(100_000)'})
    discountPrice!: number | null;
    @Field(() => [Image], {nullable:true})
    images?: Array<Image>;
    @Field(() => [Category], {nullable:true})
    category?: Array<Category>;
    @Field(() => [OrderItem], {nullable:true})
    OrderItem?: Array<OrderItem>;
    @Field(() => ProductCount, {nullable:false})
    _count?: InstanceType<typeof ProductCount>;
}

@ArgsType()
export class UpdateManyProductArgs {
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class UpdateOneProductArgs {
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    data!: InstanceType<typeof ProductUpdateInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpsertOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    create!: InstanceType<typeof ProductCreateInput>;
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    update!: InstanceType<typeof ProductUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    address!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    orders?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(8)
    password!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    role?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    address?: string;
}

@InputType()
export class UserCreateNestedOneWithoutOrdersInput {
    @Field(() => UserCreateWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateWithoutOrdersInput)
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    @Field(() => UserCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateOrConnectWithoutOrdersInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutOrdersInput, {nullable:false})
    @Type(() => UserCreateWithoutOrdersInput)
    create!: InstanceType<typeof UserCreateWithoutOrdersInput>;
}

@InputType()
export class UserCreateWithoutOrdersInput {
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(8)
    password!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    role?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    address?: string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(8)
    password!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    role?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    address?: string;
    @Field(() => OrderCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: InstanceType<typeof OrderCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    role?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    address?: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    role?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    address?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    role?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    address?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
}

@InputType()
export class UserNullableRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    role?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    address?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    role?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    address?: InstanceType<typeof SortOrderInput>;
    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    orders?: InstanceType<typeof OrderOrderByRelationAggregateInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    address?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserUncheckedCreateWithoutOrdersInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(8)
    password!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    role?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    address?: string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(8)
    password!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    role?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    address?: string;
    @Field(() => OrderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: InstanceType<typeof OrderUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutOrdersInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => OrderUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    orders?: InstanceType<typeof OrderUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneWithoutOrdersNestedInput {
    @Field(() => UserCreateWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateWithoutOrdersInput)
    create?: InstanceType<typeof UserCreateWithoutOrdersInput>;
    @Field(() => UserCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutOrdersInput>;
    @Field(() => UserUpsertWithoutOrdersInput, {nullable:true})
    @Type(() => UserUpsertWithoutOrdersInput)
    upsert?: InstanceType<typeof UserUpsertWithoutOrdersInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutOrdersInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutOrdersInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutOrdersInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutOrdersInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOrdersInput)
    data!: InstanceType<typeof UserUpdateWithoutOrdersInput>;
}

@InputType()
export class UserUpdateWithoutOrdersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => OrderUpdateManyWithoutUserNestedInput, {nullable:true})
    orders?: InstanceType<typeof OrderUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutOrdersInput {
    @Field(() => UserUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOrdersInput)
    update!: InstanceType<typeof UserUpdateWithoutOrdersInput>;
    @Field(() => UserCreateWithoutOrdersInput, {nullable:false})
    @Type(() => UserCreateWithoutOrdersInput)
    create!: InstanceType<typeof UserCreateWithoutOrdersInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringNullableFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    role?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    address?: InstanceType<typeof StringNullableFilter>;
    @Field(() => OrderListRelationFilter, {nullable:true})
    orders?: InstanceType<typeof OrderListRelationFilter>;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    role?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    address?: InstanceType<typeof StringNullableFilter>;
    @Field(() => OrderListRelationFilter, {nullable:true})
    orders?: InstanceType<typeof OrderListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    @Validator.MinLength(3)
    name!: string | null;
    @HideField()
    password!: string;
    @Field(() => String, {nullable:true,defaultValue:'USER'})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    role!: string | null;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    address!: string | null;
    @Field(() => [Order], {nullable:true})
    orders?: Array<Order>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
