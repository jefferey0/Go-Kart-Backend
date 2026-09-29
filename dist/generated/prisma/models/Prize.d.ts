import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Prize
 *
 */
export type PrizeModel = runtime.Types.Result.DefaultSelection<Prisma.$PrizePayload>;
export type AggregatePrize = {
    _count: PrizeCountAggregateOutputType | null;
    _avg: PrizeAvgAggregateOutputType | null;
    _sum: PrizeSumAggregateOutputType | null;
    _min: PrizeMinAggregateOutputType | null;
    _max: PrizeMaxAggregateOutputType | null;
};
export type PrizeAvgAggregateOutputType = {
    estimatedValue: runtime.Decimal | null;
};
export type PrizeSumAggregateOutputType = {
    estimatedValue: runtime.Decimal | null;
};
export type PrizeMinAggregateOutputType = {
    id: string | null;
    giveawayId: string | null;
    name: string | null;
    description: string | null;
    estimatedValue: runtime.Decimal | null;
    currency: string | null;
    condition: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PrizeMaxAggregateOutputType = {
    id: string | null;
    giveawayId: string | null;
    name: string | null;
    description: string | null;
    estimatedValue: runtime.Decimal | null;
    currency: string | null;
    condition: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PrizeCountAggregateOutputType = {
    id: number;
    giveawayId: number;
    name: number;
    description: number;
    estimatedValue: number;
    currency: number;
    condition: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PrizeAvgAggregateInputType = {
    estimatedValue?: true;
};
export type PrizeSumAggregateInputType = {
    estimatedValue?: true;
};
export type PrizeMinAggregateInputType = {
    id?: true;
    giveawayId?: true;
    name?: true;
    description?: true;
    estimatedValue?: true;
    currency?: true;
    condition?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PrizeMaxAggregateInputType = {
    id?: true;
    giveawayId?: true;
    name?: true;
    description?: true;
    estimatedValue?: true;
    currency?: true;
    condition?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PrizeCountAggregateInputType = {
    id?: true;
    giveawayId?: true;
    name?: true;
    description?: true;
    estimatedValue?: true;
    currency?: true;
    condition?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PrizeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Prize to aggregate.
     */
    where?: Prisma.PrizeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prizes to fetch.
     */
    orderBy?: Prisma.PrizeOrderByWithRelationInput | Prisma.PrizeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PrizeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Prizes
    **/
    _count?: true | PrizeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PrizeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PrizeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PrizeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PrizeMaxAggregateInputType;
};
export type GetPrizeAggregateType<T extends PrizeAggregateArgs> = {
    [P in keyof T & keyof AggregatePrize]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrize[P]> : Prisma.GetScalarType<T[P], AggregatePrize[P]>;
};
export type PrizeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrizeWhereInput;
    orderBy?: Prisma.PrizeOrderByWithAggregationInput | Prisma.PrizeOrderByWithAggregationInput[];
    by: Prisma.PrizeScalarFieldEnum[] | Prisma.PrizeScalarFieldEnum;
    having?: Prisma.PrizeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrizeCountAggregateInputType | true;
    _avg?: PrizeAvgAggregateInputType;
    _sum?: PrizeSumAggregateInputType;
    _min?: PrizeMinAggregateInputType;
    _max?: PrizeMaxAggregateInputType;
};
export type PrizeGroupByOutputType = {
    id: string;
    giveawayId: string;
    name: string;
    description: string;
    estimatedValue: runtime.Decimal;
    currency: string | null;
    condition: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PrizeCountAggregateOutputType | null;
    _avg: PrizeAvgAggregateOutputType | null;
    _sum: PrizeSumAggregateOutputType | null;
    _min: PrizeMinAggregateOutputType | null;
    _max: PrizeMaxAggregateOutputType | null;
};
export type GetPrizeGroupByPayload<T extends PrizeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrizeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrizeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrizeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrizeGroupByOutputType[P]>;
}>>;
export type PrizeWhereInput = {
    AND?: Prisma.PrizeWhereInput | Prisma.PrizeWhereInput[];
    OR?: Prisma.PrizeWhereInput[];
    NOT?: Prisma.PrizeWhereInput | Prisma.PrizeWhereInput[];
    id?: Prisma.StringFilter<"Prize"> | string;
    giveawayId?: Prisma.StringFilter<"Prize"> | string;
    name?: Prisma.StringFilter<"Prize"> | string;
    description?: Prisma.StringFilter<"Prize"> | string;
    estimatedValue?: Prisma.DecimalFilter<"Prize"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringNullableFilter<"Prize"> | string | null;
    condition?: Prisma.StringNullableFilter<"Prize"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Prize"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Prize"> | Date | string;
    giveaway?: Prisma.XOR<Prisma.GiveawayScalarRelationFilter, Prisma.GiveawayWhereInput>;
    images?: Prisma.PrizeImageListRelationFilter;
};
export type PrizeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    condition?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    giveaway?: Prisma.GiveawayOrderByWithRelationInput;
    images?: Prisma.PrizeImageOrderByRelationAggregateInput;
};
export type PrizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    giveawayId?: string;
    AND?: Prisma.PrizeWhereInput | Prisma.PrizeWhereInput[];
    OR?: Prisma.PrizeWhereInput[];
    NOT?: Prisma.PrizeWhereInput | Prisma.PrizeWhereInput[];
    name?: Prisma.StringFilter<"Prize"> | string;
    description?: Prisma.StringFilter<"Prize"> | string;
    estimatedValue?: Prisma.DecimalFilter<"Prize"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringNullableFilter<"Prize"> | string | null;
    condition?: Prisma.StringNullableFilter<"Prize"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Prize"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Prize"> | Date | string;
    giveaway?: Prisma.XOR<Prisma.GiveawayScalarRelationFilter, Prisma.GiveawayWhereInput>;
    images?: Prisma.PrizeImageListRelationFilter;
}, "id" | "giveawayId">;
export type PrizeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    condition?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PrizeCountOrderByAggregateInput;
    _avg?: Prisma.PrizeAvgOrderByAggregateInput;
    _max?: Prisma.PrizeMaxOrderByAggregateInput;
    _min?: Prisma.PrizeMinOrderByAggregateInput;
    _sum?: Prisma.PrizeSumOrderByAggregateInput;
};
export type PrizeScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrizeScalarWhereWithAggregatesInput | Prisma.PrizeScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrizeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrizeScalarWhereWithAggregatesInput | Prisma.PrizeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Prize"> | string;
    giveawayId?: Prisma.StringWithAggregatesFilter<"Prize"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Prize"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Prize"> | string;
    estimatedValue?: Prisma.DecimalWithAggregatesFilter<"Prize"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringNullableWithAggregatesFilter<"Prize"> | string | null;
    condition?: Prisma.StringNullableWithAggregatesFilter<"Prize"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Prize"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Prize"> | Date | string;
};
export type PrizeCreateInput = {
    id?: string;
    name: string;
    description: string;
    estimatedValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    condition?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    giveaway: Prisma.GiveawayCreateNestedOneWithoutPrizeInput;
    images?: Prisma.PrizeImageCreateNestedManyWithoutPrizeInput;
};
export type PrizeUncheckedCreateInput = {
    id?: string;
    giveawayId: string;
    name: string;
    description: string;
    estimatedValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    condition?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.PrizeImageUncheckedCreateNestedManyWithoutPrizeInput;
};
export type PrizeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    giveaway?: Prisma.GiveawayUpdateOneRequiredWithoutPrizeNestedInput;
    images?: Prisma.PrizeImageUpdateManyWithoutPrizeNestedInput;
};
export type PrizeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giveawayId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.PrizeImageUncheckedUpdateManyWithoutPrizeNestedInput;
};
export type PrizeCreateManyInput = {
    id?: string;
    giveawayId: string;
    name: string;
    description: string;
    estimatedValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    condition?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrizeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giveawayId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeNullableScalarRelationFilter = {
    is?: Prisma.PrizeWhereInput | null;
    isNot?: Prisma.PrizeWhereInput | null;
};
export type PrizeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrizeAvgOrderByAggregateInput = {
    estimatedValue?: Prisma.SortOrder;
};
export type PrizeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrizeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrizeSumOrderByAggregateInput = {
    estimatedValue?: Prisma.SortOrder;
};
export type PrizeScalarRelationFilter = {
    is?: Prisma.PrizeWhereInput;
    isNot?: Prisma.PrizeWhereInput;
};
export type PrizeCreateNestedOneWithoutGiveawayInput = {
    create?: Prisma.XOR<Prisma.PrizeCreateWithoutGiveawayInput, Prisma.PrizeUncheckedCreateWithoutGiveawayInput>;
    connectOrCreate?: Prisma.PrizeCreateOrConnectWithoutGiveawayInput;
    connect?: Prisma.PrizeWhereUniqueInput;
};
export type PrizeUncheckedCreateNestedOneWithoutGiveawayInput = {
    create?: Prisma.XOR<Prisma.PrizeCreateWithoutGiveawayInput, Prisma.PrizeUncheckedCreateWithoutGiveawayInput>;
    connectOrCreate?: Prisma.PrizeCreateOrConnectWithoutGiveawayInput;
    connect?: Prisma.PrizeWhereUniqueInput;
};
export type PrizeUpdateOneWithoutGiveawayNestedInput = {
    create?: Prisma.XOR<Prisma.PrizeCreateWithoutGiveawayInput, Prisma.PrizeUncheckedCreateWithoutGiveawayInput>;
    connectOrCreate?: Prisma.PrizeCreateOrConnectWithoutGiveawayInput;
    upsert?: Prisma.PrizeUpsertWithoutGiveawayInput;
    disconnect?: Prisma.PrizeWhereInput | boolean;
    delete?: Prisma.PrizeWhereInput | boolean;
    connect?: Prisma.PrizeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PrizeUpdateToOneWithWhereWithoutGiveawayInput, Prisma.PrizeUpdateWithoutGiveawayInput>, Prisma.PrizeUncheckedUpdateWithoutGiveawayInput>;
};
export type PrizeUncheckedUpdateOneWithoutGiveawayNestedInput = {
    create?: Prisma.XOR<Prisma.PrizeCreateWithoutGiveawayInput, Prisma.PrizeUncheckedCreateWithoutGiveawayInput>;
    connectOrCreate?: Prisma.PrizeCreateOrConnectWithoutGiveawayInput;
    upsert?: Prisma.PrizeUpsertWithoutGiveawayInput;
    disconnect?: Prisma.PrizeWhereInput | boolean;
    delete?: Prisma.PrizeWhereInput | boolean;
    connect?: Prisma.PrizeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PrizeUpdateToOneWithWhereWithoutGiveawayInput, Prisma.PrizeUpdateWithoutGiveawayInput>, Prisma.PrizeUncheckedUpdateWithoutGiveawayInput>;
};
export type PrizeCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.PrizeCreateWithoutImagesInput, Prisma.PrizeUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.PrizeCreateOrConnectWithoutImagesInput;
    connect?: Prisma.PrizeWhereUniqueInput;
};
export type PrizeUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.PrizeCreateWithoutImagesInput, Prisma.PrizeUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.PrizeCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.PrizeUpsertWithoutImagesInput;
    connect?: Prisma.PrizeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PrizeUpdateToOneWithWhereWithoutImagesInput, Prisma.PrizeUpdateWithoutImagesInput>, Prisma.PrizeUncheckedUpdateWithoutImagesInput>;
};
export type PrizeCreateWithoutGiveawayInput = {
    id?: string;
    name: string;
    description: string;
    estimatedValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    condition?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.PrizeImageCreateNestedManyWithoutPrizeInput;
};
export type PrizeUncheckedCreateWithoutGiveawayInput = {
    id?: string;
    name: string;
    description: string;
    estimatedValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    condition?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.PrizeImageUncheckedCreateNestedManyWithoutPrizeInput;
};
export type PrizeCreateOrConnectWithoutGiveawayInput = {
    where: Prisma.PrizeWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrizeCreateWithoutGiveawayInput, Prisma.PrizeUncheckedCreateWithoutGiveawayInput>;
};
export type PrizeUpsertWithoutGiveawayInput = {
    update: Prisma.XOR<Prisma.PrizeUpdateWithoutGiveawayInput, Prisma.PrizeUncheckedUpdateWithoutGiveawayInput>;
    create: Prisma.XOR<Prisma.PrizeCreateWithoutGiveawayInput, Prisma.PrizeUncheckedCreateWithoutGiveawayInput>;
    where?: Prisma.PrizeWhereInput;
};
export type PrizeUpdateToOneWithWhereWithoutGiveawayInput = {
    where?: Prisma.PrizeWhereInput;
    data: Prisma.XOR<Prisma.PrizeUpdateWithoutGiveawayInput, Prisma.PrizeUncheckedUpdateWithoutGiveawayInput>;
};
export type PrizeUpdateWithoutGiveawayInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.PrizeImageUpdateManyWithoutPrizeNestedInput;
};
export type PrizeUncheckedUpdateWithoutGiveawayInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.PrizeImageUncheckedUpdateManyWithoutPrizeNestedInput;
};
export type PrizeCreateWithoutImagesInput = {
    id?: string;
    name: string;
    description: string;
    estimatedValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    condition?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    giveaway: Prisma.GiveawayCreateNestedOneWithoutPrizeInput;
};
export type PrizeUncheckedCreateWithoutImagesInput = {
    id?: string;
    giveawayId: string;
    name: string;
    description: string;
    estimatedValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string | null;
    condition?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrizeCreateOrConnectWithoutImagesInput = {
    where: Prisma.PrizeWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrizeCreateWithoutImagesInput, Prisma.PrizeUncheckedCreateWithoutImagesInput>;
};
export type PrizeUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.PrizeUpdateWithoutImagesInput, Prisma.PrizeUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.PrizeCreateWithoutImagesInput, Prisma.PrizeUncheckedCreateWithoutImagesInput>;
    where?: Prisma.PrizeWhereInput;
};
export type PrizeUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.PrizeWhereInput;
    data: Prisma.XOR<Prisma.PrizeUpdateWithoutImagesInput, Prisma.PrizeUncheckedUpdateWithoutImagesInput>;
};
export type PrizeUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    giveaway?: Prisma.GiveawayUpdateOneRequiredWithoutPrizeNestedInput;
};
export type PrizeUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giveawayId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PrizeCountOutputType
 */
export type PrizeCountOutputType = {
    images: number;
};
export type PrizeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | PrizeCountOutputTypeCountImagesArgs;
};
/**
 * PrizeCountOutputType without action
 */
export type PrizeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeCountOutputType
     */
    select?: Prisma.PrizeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PrizeCountOutputType without action
 */
export type PrizeCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrizeImageWhereInput;
};
export type PrizeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    giveawayId?: boolean;
    name?: boolean;
    description?: boolean;
    estimatedValue?: boolean;
    currency?: boolean;
    condition?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.Prize$imagesArgs<ExtArgs>;
    _count?: boolean | Prisma.PrizeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prize"]>;
export type PrizeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    giveawayId?: boolean;
    name?: boolean;
    description?: boolean;
    estimatedValue?: boolean;
    currency?: boolean;
    condition?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prize"]>;
export type PrizeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    giveawayId?: boolean;
    name?: boolean;
    description?: boolean;
    estimatedValue?: boolean;
    currency?: boolean;
    condition?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prize"]>;
export type PrizeSelectScalar = {
    id?: boolean;
    giveawayId?: boolean;
    name?: boolean;
    description?: boolean;
    estimatedValue?: boolean;
    currency?: boolean;
    condition?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PrizeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "giveawayId" | "name" | "description" | "estimatedValue" | "currency" | "condition" | "createdAt" | "updatedAt", ExtArgs["result"]["prize"]>;
export type PrizeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.Prize$imagesArgs<ExtArgs>;
    _count?: boolean | Prisma.PrizeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PrizeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
};
export type PrizeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
};
export type $PrizePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Prize";
    objects: {
        giveaway: Prisma.$GiveawayPayload<ExtArgs>;
        images: Prisma.$PrizeImagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        giveawayId: string;
        name: string;
        description: string;
        estimatedValue: runtime.Decimal;
        currency: string | null;
        condition: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["prize"]>;
    composites: {};
};
export type PrizeGetPayload<S extends boolean | null | undefined | PrizeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrizePayload, S>;
export type PrizeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrizeCountAggregateInputType | true;
};
export interface PrizeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Prize'];
        meta: {
            name: 'Prize';
        };
    };
    /**
     * Find zero or one Prize that matches the filter.
     * @param {PrizeFindUniqueArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrizeFindUniqueArgs>(args: Prisma.SelectSubset<T, PrizeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Prize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrizeFindUniqueOrThrowArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrizeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Prize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeFindFirstArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrizeFindFirstArgs>(args?: Prisma.SelectSubset<T, PrizeFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Prize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeFindFirstOrThrowArgs} args - Arguments to find a Prize
     * @example
     * // Get one Prize
     * const prize = await prisma.prize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrizeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrizeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Prizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prizes
     * const prizes = await prisma.prize.findMany()
     *
     * // Get first 10 Prizes
     * const prizes = await prisma.prize.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const prizeWithIdOnly = await prisma.prize.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PrizeFindManyArgs>(args?: Prisma.SelectSubset<T, PrizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Prize.
     * @param {PrizeCreateArgs} args - Arguments to create a Prize.
     * @example
     * // Create one Prize
     * const Prize = await prisma.prize.create({
     *   data: {
     *     // ... data to create a Prize
     *   }
     * })
     *
     */
    create<T extends PrizeCreateArgs>(args: Prisma.SelectSubset<T, PrizeCreateArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Prizes.
     * @param {PrizeCreateManyArgs} args - Arguments to create many Prizes.
     * @example
     * // Create many Prizes
     * const prize = await prisma.prize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PrizeCreateManyArgs>(args?: Prisma.SelectSubset<T, PrizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Prizes and returns the data saved in the database.
     * @param {PrizeCreateManyAndReturnArgs} args - Arguments to create many Prizes.
     * @example
     * // Create many Prizes
     * const prize = await prisma.prize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Prizes and only return the `id`
     * const prizeWithIdOnly = await prisma.prize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PrizeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Prize.
     * @param {PrizeDeleteArgs} args - Arguments to delete one Prize.
     * @example
     * // Delete one Prize
     * const Prize = await prisma.prize.delete({
     *   where: {
     *     // ... filter to delete one Prize
     *   }
     * })
     *
     */
    delete<T extends PrizeDeleteArgs>(args: Prisma.SelectSubset<T, PrizeDeleteArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Prize.
     * @param {PrizeUpdateArgs} args - Arguments to update one Prize.
     * @example
     * // Update one Prize
     * const prize = await prisma.prize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PrizeUpdateArgs>(args: Prisma.SelectSubset<T, PrizeUpdateArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Prizes.
     * @param {PrizeDeleteManyArgs} args - Arguments to filter Prizes to delete.
     * @example
     * // Delete a few Prizes
     * const { count } = await prisma.prize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PrizeDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prizes
     * const prize = await prisma.prize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PrizeUpdateManyArgs>(args: Prisma.SelectSubset<T, PrizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Prizes and returns the data updated in the database.
     * @param {PrizeUpdateManyAndReturnArgs} args - Arguments to update many Prizes.
     * @example
     * // Update many Prizes
     * const prize = await prisma.prize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Prizes and only return the `id`
     * const prizeWithIdOnly = await prisma.prize.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PrizeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Prize.
     * @param {PrizeUpsertArgs} args - Arguments to update or create a Prize.
     * @example
     * // Update or create a Prize
     * const prize = await prisma.prize.upsert({
     *   create: {
     *     // ... data to create a Prize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prize we want to update
     *   }
     * })
     */
    upsert<T extends PrizeUpsertArgs>(args: Prisma.SelectSubset<T, PrizeUpsertArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Prizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeCountArgs} args - Arguments to filter Prizes to count.
     * @example
     * // Count the number of Prizes
     * const count = await prisma.prize.count({
     *   where: {
     *     // ... the filter for the Prizes we want to count
     *   }
     * })
    **/
    count<T extends PrizeCountArgs>(args?: Prisma.Subset<T, PrizeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrizeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Prize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrizeAggregateArgs>(args: Prisma.Subset<T, PrizeAggregateArgs>): Prisma.PrismaPromise<GetPrizeAggregateType<T>>;
    /**
     * Group by Prize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PrizeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrizeGroupByArgs['orderBy'];
    } : {
        orderBy?: PrizeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Prize model
     */
    readonly fields: PrizeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Prize.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PrizeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    giveaway<T extends Prisma.GiveawayDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GiveawayDefaultArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    images<T extends Prisma.Prize$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Prize$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Prize model
 */
export interface PrizeFieldRefs {
    readonly id: Prisma.FieldRef<"Prize", 'String'>;
    readonly giveawayId: Prisma.FieldRef<"Prize", 'String'>;
    readonly name: Prisma.FieldRef<"Prize", 'String'>;
    readonly description: Prisma.FieldRef<"Prize", 'String'>;
    readonly estimatedValue: Prisma.FieldRef<"Prize", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Prize", 'String'>;
    readonly condition: Prisma.FieldRef<"Prize", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Prize", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Prize", 'DateTime'>;
}
/**
 * Prize findUnique
 */
export type PrizeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
    /**
     * Filter, which Prize to fetch.
     */
    where: Prisma.PrizeWhereUniqueInput;
};
/**
 * Prize findUniqueOrThrow
 */
export type PrizeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
    /**
     * Filter, which Prize to fetch.
     */
    where: Prisma.PrizeWhereUniqueInput;
};
/**
 * Prize findFirst
 */
export type PrizeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
    /**
     * Filter, which Prize to fetch.
     */
    where?: Prisma.PrizeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prizes to fetch.
     */
    orderBy?: Prisma.PrizeOrderByWithRelationInput | Prisma.PrizeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Prizes.
     */
    cursor?: Prisma.PrizeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Prizes.
     */
    distinct?: Prisma.PrizeScalarFieldEnum | Prisma.PrizeScalarFieldEnum[];
};
/**
 * Prize findFirstOrThrow
 */
export type PrizeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
    /**
     * Filter, which Prize to fetch.
     */
    where?: Prisma.PrizeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prizes to fetch.
     */
    orderBy?: Prisma.PrizeOrderByWithRelationInput | Prisma.PrizeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Prizes.
     */
    cursor?: Prisma.PrizeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Prizes.
     */
    distinct?: Prisma.PrizeScalarFieldEnum | Prisma.PrizeScalarFieldEnum[];
};
/**
 * Prize findMany
 */
export type PrizeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
    /**
     * Filter, which Prizes to fetch.
     */
    where?: Prisma.PrizeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Prizes to fetch.
     */
    orderBy?: Prisma.PrizeOrderByWithRelationInput | Prisma.PrizeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Prizes.
     */
    cursor?: Prisma.PrizeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Prizes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Prizes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Prizes.
     */
    distinct?: Prisma.PrizeScalarFieldEnum | Prisma.PrizeScalarFieldEnum[];
};
/**
 * Prize create
 */
export type PrizeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Prize.
     */
    data: Prisma.XOR<Prisma.PrizeCreateInput, Prisma.PrizeUncheckedCreateInput>;
};
/**
 * Prize createMany
 */
export type PrizeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prizes.
     */
    data: Prisma.PrizeCreateManyInput | Prisma.PrizeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Prize createManyAndReturn
 */
export type PrizeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * The data used to create many Prizes.
     */
    data: Prisma.PrizeCreateManyInput | Prisma.PrizeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Prize update
 */
export type PrizeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Prize.
     */
    data: Prisma.XOR<Prisma.PrizeUpdateInput, Prisma.PrizeUncheckedUpdateInput>;
    /**
     * Choose, which Prize to update.
     */
    where: Prisma.PrizeWhereUniqueInput;
};
/**
 * Prize updateMany
 */
export type PrizeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Prizes.
     */
    data: Prisma.XOR<Prisma.PrizeUpdateManyMutationInput, Prisma.PrizeUncheckedUpdateManyInput>;
    /**
     * Filter which Prizes to update
     */
    where?: Prisma.PrizeWhereInput;
    /**
     * Limit how many Prizes to update.
     */
    limit?: number;
};
/**
 * Prize updateManyAndReturn
 */
export type PrizeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * The data used to update Prizes.
     */
    data: Prisma.XOR<Prisma.PrizeUpdateManyMutationInput, Prisma.PrizeUncheckedUpdateManyInput>;
    /**
     * Filter which Prizes to update
     */
    where?: Prisma.PrizeWhereInput;
    /**
     * Limit how many Prizes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Prize upsert
 */
export type PrizeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Prize to update in case it exists.
     */
    where: Prisma.PrizeWhereUniqueInput;
    /**
     * In case the Prize found by the `where` argument doesn't exist, create a new Prize with this data.
     */
    create: Prisma.XOR<Prisma.PrizeCreateInput, Prisma.PrizeUncheckedCreateInput>;
    /**
     * In case the Prize was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PrizeUpdateInput, Prisma.PrizeUncheckedUpdateInput>;
};
/**
 * Prize delete
 */
export type PrizeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
    /**
     * Filter which Prize to delete.
     */
    where: Prisma.PrizeWhereUniqueInput;
};
/**
 * Prize deleteMany
 */
export type PrizeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Prizes to delete
     */
    where?: Prisma.PrizeWhereInput;
    /**
     * Limit how many Prizes to delete.
     */
    limit?: number;
};
/**
 * Prize.images
 */
export type Prize$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeImage
     */
    select?: Prisma.PrizeImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeImage
     */
    omit?: Prisma.PrizeImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeImageInclude<ExtArgs> | null;
    where?: Prisma.PrizeImageWhereInput;
    orderBy?: Prisma.PrizeImageOrderByWithRelationInput | Prisma.PrizeImageOrderByWithRelationInput[];
    cursor?: Prisma.PrizeImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrizeImageScalarFieldEnum | Prisma.PrizeImageScalarFieldEnum[];
};
/**
 * Prize without action
 */
export type PrizeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prize
     */
    select?: Prisma.PrizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Prize
     */
    omit?: Prisma.PrizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeInclude<ExtArgs> | null;
};
//# sourceMappingURL=Prize.d.ts.map