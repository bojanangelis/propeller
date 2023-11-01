import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password"
}

export enum RatingScalarFieldEnum {
    id = "id",
    rate = "rate",
    count = "count"
}

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    discountPrice = "discountPrice",
    categoryId = "categoryId",
    image = "image",
    ratingId = "ratingId"
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

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name"
}

registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
registerEnumType(RatingScalarFieldEnum, { name: 'RatingScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateCategory {
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgAggregate>;
    @Field(() => CategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CategorySumAggregate>;
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
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgAggregateInput>;
    @Field(() => CategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CategorySumAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@InputType()
export class CategoryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CategoryAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class CategoryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
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
    _all!: number;
}

@InputType()
export class CategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@ObjectType()
export class CategoryCount {
    @Field(() => Int, {nullable:false})
    products?: number;
}

@InputType()
export class CategoryCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class CategoryCreateNestedOneWithoutProductsInput {
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutProductsInput)
    create?: InstanceType<typeof CategoryCreateWithoutProductsInput>;
    @Field(() => CategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: InstanceType<typeof CategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}

@InputType()
export class CategoryCreateOrConnectWithoutProductsInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutProductsInput)
    create!: InstanceType<typeof CategoryCreateWithoutProductsInput>;
}

@InputType()
export class CategoryCreateWithoutProductsInput {
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class CategoryCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
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
    @Field(() => CategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgAggregateInput>;
    @Field(() => CategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CategorySumAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@ObjectType()
export class CategoryGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgAggregate>;
    @Field(() => CategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CategorySumAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregate>;
}

@InputType()
export class CategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class CategoryMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class CategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class CategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class CategoryMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class CategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class CategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => CategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountOrderByAggregateInput>;
    @Field(() => CategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CategoryAvgOrderByAggregateInput>;
    @Field(() => CategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxOrderByAggregateInput>;
    @Field(() => CategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinOrderByAggregateInput>;
    @Field(() => CategorySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CategorySumOrderByAggregateInput>;
}

@InputType()
export class CategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}

@InputType()
export class CategoryRelationFilter {
    @Field(() => CategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CategoryWhereInput>;
}

@InputType()
export class CategoryScalarWhereWithAggregatesInput {
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CategorySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class CategorySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CategorySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class CategoryUncheckedCreateWithoutProductsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class CategoryUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutCategoryInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateWithoutProductsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutCategoryNestedInput>;
}

@InputType()
export class CategoryUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateOneRequiredWithoutProductsNestedInput {
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutProductsInput)
    create?: InstanceType<typeof CategoryCreateWithoutProductsInput>;
    @Field(() => CategoryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: InstanceType<typeof CategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => CategoryUpsertWithoutProductsInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutProductsInput)
    upsert?: InstanceType<typeof CategoryUpsertWithoutProductsInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => CategoryUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutProductsInput)
    update?: InstanceType<typeof CategoryUpdateToOneWithWhereWithoutProductsInput>;
}

@InputType()
export class CategoryUpdateToOneWithWhereWithoutProductsInput {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutProductsInput)
    data!: InstanceType<typeof CategoryUpdateWithoutProductsInput>;
}

@InputType()
export class CategoryUpdateWithoutProductsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class CategoryUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutCategoryNestedInput>;
}

@InputType()
export class CategoryUpsertWithoutProductsInput {
    @Field(() => CategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutProductsInput)
    update!: InstanceType<typeof CategoryUpdateWithoutProductsInput>;
    @Field(() => CategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutProductsInput)
    create!: InstanceType<typeof CategoryCreateWithoutProductsInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
}

@InputType()
export class CategoryWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;
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
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@ObjectType()
export class Category {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
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
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindFirstCategoryOrThrowArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
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
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
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
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
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
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindUniqueCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
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
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpsertOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    create!: InstanceType<typeof CategoryCreateInput>;
    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    update!: InstanceType<typeof CategoryUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class FloatFieldUpdateOperationsInput {
    @Field(() => Float, {nullable:true})
    set?: number;
    @Field(() => Float, {nullable:true})
    increment?: number;
    @Field(() => Float, {nullable:true})
    decrement?: number;
    @Field(() => Float, {nullable:true})
    multiply?: number;
    @Field(() => Float, {nullable:true})
    divide?: number;
}

@InputType()
export class FloatFilter {
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
export class FloatWithAggregatesFilter {
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
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
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
export class NestedFloatWithAggregatesFilter {
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
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
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
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
}

@ArgsType()
export class FindFirstProductOrThrowArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
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
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
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
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
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
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
}

@ArgsType()
export class FindUniqueProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
}

@ArgsType()
export class ProductAggregateArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
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
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    ratingId?: true;
}

@ObjectType()
export class ProductAvgAggregate {
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => Float, {nullable:true})
    discountPrice?: number;
    @Field(() => Float, {nullable:true})
    categoryId?: number;
    @Field(() => Float, {nullable:true})
    ratingId?: number;
}

@InputType()
export class ProductAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ratingId?: keyof typeof SortOrder;
}

@InputType()
export class ProductCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
    @Field(() => Boolean, {nullable:true})
    ratingId?: true;
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
    description!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    discountPrice!: number;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => Int, {nullable:false})
    image!: number;
    @Field(() => Int, {nullable:false})
    ratingId!: number;
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
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ratingId?: keyof typeof SortOrder;
}

@InputType()
export class ProductCreateManyCategoryInputEnvelope {
    @Field(() => [ProductCreateManyCategoryInput], {nullable:false})
    @Type(() => ProductCreateManyCategoryInput)
    data!: Array<ProductCreateManyCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductCreateManyCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => Int, {nullable:false})
    ratingId!: number;
}

@InputType()
export class ProductCreateManyRatingInputEnvelope {
    @Field(() => [ProductCreateManyRatingInput], {nullable:false})
    @Type(() => ProductCreateManyRatingInput)
    data!: Array<ProductCreateManyRatingInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProductCreateManyRatingInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => String, {nullable:false})
    image!: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => Int, {nullable:false})
    ratingId!: number;
}

@InputType()
export class ProductCreateNestedManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
}

@InputType()
export class ProductCreateNestedManyWithoutRatingInput {
    @Field(() => [ProductCreateWithoutRatingInput], {nullable:true})
    @Type(() => ProductCreateWithoutRatingInput)
    create?: Array<ProductCreateWithoutRatingInput>;
    @Field(() => [ProductCreateOrConnectWithoutRatingInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutRatingInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutRatingInput>;
    @Field(() => ProductCreateManyRatingInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyRatingInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyRatingInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
}

@InputType()
export class ProductCreateOrConnectWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCategoryInput)
    create!: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutRatingInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
    @Field(() => ProductCreateWithoutRatingInput, {nullable:false})
    @Type(() => ProductCreateWithoutRatingInput)
    create!: InstanceType<typeof ProductCreateWithoutRatingInput>;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => RatingCreateNestedOneWithoutProductInput, {nullable:false})
    rating!: InstanceType<typeof RatingCreateNestedOneWithoutProductInput>;
}

@InputType()
export class ProductCreateWithoutRatingInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutProductsInput>;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutProductsInput>;
    @Field(() => RatingCreateNestedOneWithoutProductInput, {nullable:false})
    rating!: InstanceType<typeof RatingCreateNestedOneWithoutProductInput>;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => Int, {nullable:false})
    ratingId!: number;
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
    description?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
    @Field(() => Boolean, {nullable:true})
    ratingId?: true;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => Int, {nullable:true})
    categoryId?: number;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => Int, {nullable:true})
    ratingId?: number;
}

@InputType()
export class ProductMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ratingId?: keyof typeof SortOrder;
}

@InputType()
export class ProductMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    image?: true;
    @Field(() => Boolean, {nullable:true})
    ratingId?: true;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => Int, {nullable:true})
    categoryId?: number;
    @Field(() => String, {nullable:true})
    image?: string;
    @Field(() => Int, {nullable:true})
    ratingId?: number;
}

@InputType()
export class ProductMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ratingId?: keyof typeof SortOrder;
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
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    discountPrice?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ratingId?: keyof typeof SortOrder;
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
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    discountPrice?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ratingId?: keyof typeof SortOrder;
    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: InstanceType<typeof CategoryOrderByWithRelationInput>;
    @Field(() => RatingOrderByWithRelationInput, {nullable:true})
    rating?: InstanceType<typeof RatingOrderByWithRelationInput>;
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
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    categoryId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ratingId?: InstanceType<typeof IntWithAggregatesFilter>;
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
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    categoryId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    image?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    ratingId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class ProductSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    ratingId?: true;
}

@ObjectType()
export class ProductSumAggregate {
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => Int, {nullable:true})
    categoryId?: number;
    @Field(() => Int, {nullable:true})
    ratingId?: number;
}

@InputType()
export class ProductSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ratingId?: keyof typeof SortOrder;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutCategoryInput {
    @Field(() => [ProductCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCategoryInput)
    create?: Array<ProductCreateWithoutCategoryInput>;
    @Field(() => [ProductCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCategoryInput>;
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutRatingInput {
    @Field(() => [ProductCreateWithoutRatingInput], {nullable:true})
    @Type(() => ProductCreateWithoutRatingInput)
    create?: Array<ProductCreateWithoutRatingInput>;
    @Field(() => [ProductCreateOrConnectWithoutRatingInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutRatingInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutRatingInput>;
    @Field(() => ProductCreateManyRatingInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyRatingInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyRatingInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => Int, {nullable:false})
    ratingId!: number;
}

@InputType()
export class ProductUncheckedCreateWithoutRatingInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => String, {nullable:false})
    image!: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => Int, {nullable:false})
    ratingId!: number;
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
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
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
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ratingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutRatingNestedInput {
    @Field(() => [ProductCreateWithoutRatingInput], {nullable:true})
    @Type(() => ProductCreateWithoutRatingInput)
    create?: Array<ProductCreateWithoutRatingInput>;
    @Field(() => [ProductCreateOrConnectWithoutRatingInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutRatingInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutRatingInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutRatingInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutRatingInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutRatingInput>;
    @Field(() => ProductCreateManyRatingInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyRatingInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyRatingInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutRatingInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutRatingInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutRatingInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutRatingInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutRatingInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutRatingInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutRatingInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ratingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ratingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutRatingInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ratingId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ProductUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
export class ProductUpdateManyWithWhereWithoutRatingInput {
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
    @Field(() => ProductCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyCategoryInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
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
export class ProductUpdateManyWithoutRatingNestedInput {
    @Field(() => [ProductCreateWithoutRatingInput], {nullable:true})
    @Type(() => ProductCreateWithoutRatingInput)
    create?: Array<ProductCreateWithoutRatingInput>;
    @Field(() => [ProductCreateOrConnectWithoutRatingInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutRatingInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutRatingInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutRatingInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutRatingInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutRatingInput>;
    @Field(() => ProductCreateManyRatingInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyRatingInputEnvelope)
    createMany?: InstanceType<typeof ProductCreateManyRatingInputEnvelope>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutRatingInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutRatingInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutRatingInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutRatingInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutRatingInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutRatingInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoryInput)
    data!: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutRatingInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
    @Field(() => ProductUpdateWithoutRatingInput, {nullable:false})
    @Type(() => ProductUpdateWithoutRatingInput)
    data!: InstanceType<typeof ProductUpdateWithoutRatingInput>;
}

@InputType()
export class ProductUpdateWithoutCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RatingUpdateOneRequiredWithoutProductNestedInput, {nullable:true})
    rating?: InstanceType<typeof RatingUpdateOneRequiredWithoutProductNestedInput>;
}

@InputType()
export class ProductUpdateWithoutRatingInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountPrice?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutProductsNestedInput>;
    @Field(() => RatingUpdateOneRequiredWithoutProductNestedInput, {nullable:true})
    rating?: InstanceType<typeof RatingUpdateOneRequiredWithoutProductNestedInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutCategoryInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
    @Field(() => ProductUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCategoryInput)
    update!: InstanceType<typeof ProductUpdateWithoutCategoryInput>;
    @Field(() => ProductCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCategoryInput)
    create!: InstanceType<typeof ProductCreateWithoutCategoryInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutRatingInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
    @Field(() => ProductUpdateWithoutRatingInput, {nullable:false})
    @Type(() => ProductUpdateWithoutRatingInput)
    update!: InstanceType<typeof ProductUpdateWithoutRatingInput>;
    @Field(() => ProductCreateWithoutRatingInput, {nullable:false})
    @Type(() => ProductCreateWithoutRatingInput)
    create!: InstanceType<typeof ProductCreateWithoutRatingInput>;
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
    @Field(() => Int, {nullable:true})
    ratingId?: number;
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    categoryId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    image?: InstanceType<typeof StringFilter>;
    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: InstanceType<typeof CategoryRelationFilter>;
    @Field(() => RatingRelationFilter, {nullable:true})
    rating?: InstanceType<typeof RatingRelationFilter>;
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
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    categoryId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    image?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    ratingId?: InstanceType<typeof IntFilter>;
    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: InstanceType<typeof CategoryRelationFilter>;
    @Field(() => RatingRelationFilter, {nullable:true})
    rating?: InstanceType<typeof RatingRelationFilter>;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string | null;
    /**
     * @Validator .@IsInt()
     * @Validator .@Min(1)
     * @Validator .@Max(100_000)
     */
    @Field(() => Int, {nullable:false,description:'@Validator.@IsInt()\n@Validator.@Min(1)\n@Validator.@Max(100_000)'})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice!: number | null;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => String, {nullable:false})
    image!: string;
    @Field(() => Int, {nullable:false})
    ratingId!: number;
    @Field(() => Category, {nullable:false})
    category?: InstanceType<typeof Category>;
    @Field(() => Rating, {nullable:false})
    rating?: InstanceType<typeof Rating>;
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
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
}

@ArgsType()
export class UpsertOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name' | 'ratingId'>;
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    create!: InstanceType<typeof ProductCreateInput>;
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    update!: InstanceType<typeof ProductUpdateInput>;
}

@ObjectType()
export class AggregateRating {
    @Field(() => RatingCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RatingCountAggregate>;
    @Field(() => RatingAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgAggregate>;
    @Field(() => RatingSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RatingSumAggregate>;
    @Field(() => RatingMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RatingMinAggregate>;
    @Field(() => RatingMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RatingMaxAggregate>;
}

@ArgsType()
export class CreateManyRatingArgs {
    @Field(() => [RatingCreateManyInput], {nullable:false})
    @Type(() => RatingCreateManyInput)
    data!: Array<RatingCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRatingArgs {
    @Field(() => RatingCreateInput, {nullable:false})
    @Type(() => RatingCreateInput)
    data!: InstanceType<typeof RatingCreateInput>;
}

@ArgsType()
export class DeleteManyRatingArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: InstanceType<typeof RatingWhereInput>;
}

@ArgsType()
export class DeleteOneRatingArgs {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstRatingOrThrowArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RatingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RatingScalarFieldEnum>;
}

@ArgsType()
export class FindFirstRatingArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RatingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RatingScalarFieldEnum>;
}

@ArgsType()
export class FindManyRatingArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RatingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RatingScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueRatingOrThrowArgs {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueRatingArgs {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
}

@ArgsType()
export class RatingAggregateArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RatingCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RatingCountAggregateInput>;
    @Field(() => RatingAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgAggregateInput>;
    @Field(() => RatingSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RatingSumAggregateInput>;
    @Field(() => RatingMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RatingMinAggregateInput>;
    @Field(() => RatingMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RatingMaxAggregateInput>;
}

@InputType()
export class RatingAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rate?: true;
    @Field(() => Boolean, {nullable:true})
    count?: true;
}

@ObjectType()
export class RatingAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    rate?: number;
    @Field(() => Float, {nullable:true})
    count?: number;
}

@InputType()
export class RatingAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;
}

@InputType()
export class RatingCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rate?: true;
    @Field(() => Boolean, {nullable:true})
    count?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RatingCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    rate!: number;
    @Field(() => Int, {nullable:false})
    count!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RatingCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;
}

@ObjectType()
export class RatingCount {
    @Field(() => Int, {nullable:false})
    product?: number;
}

@InputType()
export class RatingCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:false})
    rate!: number;
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class RatingCreateNestedOneWithoutProductInput {
    @Field(() => RatingCreateWithoutProductInput, {nullable:true})
    @Type(() => RatingCreateWithoutProductInput)
    create?: InstanceType<typeof RatingCreateWithoutProductInput>;
    @Field(() => RatingCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutProductInput)
    connectOrCreate?: InstanceType<typeof RatingCreateOrConnectWithoutProductInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    connect?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
}

@InputType()
export class RatingCreateOrConnectWithoutProductInput {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => RatingCreateWithoutProductInput, {nullable:false})
    @Type(() => RatingCreateWithoutProductInput)
    create!: InstanceType<typeof RatingCreateWithoutProductInput>;
}

@InputType()
export class RatingCreateWithoutProductInput {
    @Field(() => Float, {nullable:false})
    rate!: number;
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class RatingCreateInput {
    @Field(() => Float, {nullable:false})
    rate!: number;
    @Field(() => Int, {nullable:false})
    count!: number;
    @Field(() => ProductCreateNestedManyWithoutRatingInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedManyWithoutRatingInput>;
}

@ArgsType()
export class RatingGroupByArgs {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => [RatingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithAggregationInput>;
    @Field(() => [RatingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RatingScalarFieldEnum>;
    @Field(() => RatingScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RatingScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RatingCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RatingCountAggregateInput>;
    @Field(() => RatingAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgAggregateInput>;
    @Field(() => RatingSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RatingSumAggregateInput>;
    @Field(() => RatingMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RatingMinAggregateInput>;
    @Field(() => RatingMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RatingMaxAggregateInput>;
}

@ObjectType()
export class RatingGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Float, {nullable:false})
    rate!: number;
    @Field(() => Int, {nullable:false})
    count!: number;
    @Field(() => RatingCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RatingCountAggregate>;
    @Field(() => RatingAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgAggregate>;
    @Field(() => RatingSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RatingSumAggregate>;
    @Field(() => RatingMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RatingMinAggregate>;
    @Field(() => RatingMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RatingMaxAggregate>;
}

@InputType()
export class RatingMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rate?: true;
    @Field(() => Boolean, {nullable:true})
    count?: true;
}

@ObjectType()
export class RatingMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    rate?: number;
    @Field(() => Int, {nullable:true})
    count?: number;
}

@InputType()
export class RatingMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;
}

@InputType()
export class RatingMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rate?: true;
    @Field(() => Boolean, {nullable:true})
    count?: true;
}

@ObjectType()
export class RatingMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    rate?: number;
    @Field(() => Int, {nullable:true})
    count?: number;
}

@InputType()
export class RatingMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;
}

@InputType()
export class RatingOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;
    @Field(() => RatingCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RatingCountOrderByAggregateInput>;
    @Field(() => RatingAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RatingAvgOrderByAggregateInput>;
    @Field(() => RatingMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RatingMaxOrderByAggregateInput>;
    @Field(() => RatingMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RatingMinOrderByAggregateInput>;
    @Field(() => RatingSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RatingSumOrderByAggregateInput>;
}

@InputType()
export class RatingOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    product?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}

@InputType()
export class RatingRelationFilter {
    @Field(() => RatingWhereInput, {nullable:true})
    is?: InstanceType<typeof RatingWhereInput>;
    @Field(() => RatingWhereInput, {nullable:true})
    isNot?: InstanceType<typeof RatingWhereInput>;
}

@InputType()
export class RatingScalarWhereWithAggregatesInput {
    @Field(() => [RatingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RatingScalarWhereWithAggregatesInput>;
    @Field(() => [RatingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RatingScalarWhereWithAggregatesInput>;
    @Field(() => [RatingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RatingScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rate?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    count?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class RatingSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rate?: true;
    @Field(() => Boolean, {nullable:true})
    count?: true;
}

@ObjectType()
export class RatingSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    rate?: number;
    @Field(() => Int, {nullable:true})
    count?: number;
}

@InputType()
export class RatingSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;
}

@InputType()
export class RatingUncheckedCreateWithoutProductInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:false})
    rate!: number;
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class RatingUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:false})
    rate!: number;
    @Field(() => Int, {nullable:false})
    count!: number;
    @Field(() => ProductUncheckedCreateNestedManyWithoutRatingInput, {nullable:true})
    product?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutRatingInput>;
}

@InputType()
export class RatingUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class RatingUncheckedUpdateWithoutProductInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class RatingUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => ProductUncheckedUpdateManyWithoutRatingNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUncheckedUpdateManyWithoutRatingNestedInput>;
}

@InputType()
export class RatingUpdateManyMutationInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class RatingUpdateOneRequiredWithoutProductNestedInput {
    @Field(() => RatingCreateWithoutProductInput, {nullable:true})
    @Type(() => RatingCreateWithoutProductInput)
    create?: InstanceType<typeof RatingCreateWithoutProductInput>;
    @Field(() => RatingCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => RatingCreateOrConnectWithoutProductInput)
    connectOrCreate?: InstanceType<typeof RatingCreateOrConnectWithoutProductInput>;
    @Field(() => RatingUpsertWithoutProductInput, {nullable:true})
    @Type(() => RatingUpsertWithoutProductInput)
    upsert?: InstanceType<typeof RatingUpsertWithoutProductInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:true})
    @Type(() => RatingWhereUniqueInput)
    connect?: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => RatingUpdateToOneWithWhereWithoutProductInput, {nullable:true})
    @Type(() => RatingUpdateToOneWithWhereWithoutProductInput)
    update?: InstanceType<typeof RatingUpdateToOneWithWhereWithoutProductInput>;
}

@InputType()
export class RatingUpdateToOneWithWhereWithoutProductInput {
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: InstanceType<typeof RatingWhereInput>;
    @Field(() => RatingUpdateWithoutProductInput, {nullable:false})
    @Type(() => RatingUpdateWithoutProductInput)
    data!: InstanceType<typeof RatingUpdateWithoutProductInput>;
}

@InputType()
export class RatingUpdateWithoutProductInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class RatingUpdateInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    rate?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => ProductUpdateManyWithoutRatingNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateManyWithoutRatingNestedInput>;
}

@InputType()
export class RatingUpsertWithoutProductInput {
    @Field(() => RatingUpdateWithoutProductInput, {nullable:false})
    @Type(() => RatingUpdateWithoutProductInput)
    update!: InstanceType<typeof RatingUpdateWithoutProductInput>;
    @Field(() => RatingCreateWithoutProductInput, {nullable:false})
    @Type(() => RatingCreateWithoutProductInput)
    create!: InstanceType<typeof RatingCreateWithoutProductInput>;
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: InstanceType<typeof RatingWhereInput>;
}

@InputType()
export class RatingWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [RatingWhereInput], {nullable:true})
    AND?: Array<RatingWhereInput>;
    @Field(() => [RatingWhereInput], {nullable:true})
    OR?: Array<RatingWhereInput>;
    @Field(() => [RatingWhereInput], {nullable:true})
    NOT?: Array<RatingWhereInput>;
    @Field(() => FloatFilter, {nullable:true})
    rate?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    count?: InstanceType<typeof IntFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductListRelationFilter>;
}

@InputType()
export class RatingWhereInput {
    @Field(() => [RatingWhereInput], {nullable:true})
    AND?: Array<RatingWhereInput>;
    @Field(() => [RatingWhereInput], {nullable:true})
    OR?: Array<RatingWhereInput>;
    @Field(() => [RatingWhereInput], {nullable:true})
    NOT?: Array<RatingWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    rate?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    count?: InstanceType<typeof IntFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductListRelationFilter>;
}

@ObjectType()
export class Rating {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Float, {nullable:false})
    rate!: number;
    @Field(() => Int, {nullable:false})
    count!: number;
    @Field(() => [Product], {nullable:true})
    product?: Array<Product>;
    @Field(() => RatingCount, {nullable:false})
    _count?: InstanceType<typeof RatingCount>;
}

@ArgsType()
export class UpdateManyRatingArgs {
    @Field(() => RatingUpdateManyMutationInput, {nullable:false})
    @Type(() => RatingUpdateManyMutationInput)
    data!: InstanceType<typeof RatingUpdateManyMutationInput>;
    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: InstanceType<typeof RatingWhereInput>;
}

@ArgsType()
export class UpdateOneRatingArgs {
    @Field(() => RatingUpdateInput, {nullable:false})
    @Type(() => RatingUpdateInput)
    data!: InstanceType<typeof RatingUpdateInput>;
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneRatingArgs {
    @Field(() => RatingWhereUniqueInput, {nullable:false})
    @Type(() => RatingWhereUniqueInput)
    where!: Prisma.AtLeast<RatingWhereUniqueInput, 'id'>;
    @Field(() => RatingCreateInput, {nullable:false})
    @Type(() => RatingCreateInput)
    create!: InstanceType<typeof RatingCreateInput>;
    @Field(() => RatingUpdateInput, {nullable:false})
    @Type(() => RatingUpdateInput)
    update!: InstanceType<typeof RatingUpdateInput>;
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
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
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
}
