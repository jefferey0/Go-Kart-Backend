import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model PrizeImage
 *
 */
export type PrizeImageModel = runtime.Types.Result.DefaultSelection<Prisma.$PrizeImagePayload>;
export type AggregatePrizeImage = {
    _count: PrizeImageCountAggregateOutputType | null;
    _avg: PrizeImageAvgAggregateOutputType | null;
    _sum: PrizeImageSumAggregateOutputType | null;
    _min: PrizeImageMinAggregateOutputType | null;
    _max: PrizeImageMaxAggregateOutputType | null;
};
export type PrizeImageAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type PrizeImageSumAggregateOutputType = {
    sortOrder: number | null;
};
export type PrizeImageMinAggregateOutputType = {
    id: string | null;
    prizeId: string | null;
    url: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type PrizeImageMaxAggregateOutputType = {
    id: string | null;
    prizeId: string | null;
    url: string | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type PrizeImageCountAggregateOutputType = {
    id: number;
    prizeId: number;
    url: number;
    sortOrder: number;
    createdAt: number;
    _all: number;
};
export type PrizeImageAvgAggregateInputType = {
    sortOrder?: true;
};
export type PrizeImageSumAggregateInputType = {
    sortOrder?: true;
};
export type PrizeImageMinAggregateInputType = {
    id?: true;
    prizeId?: true;
    url?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type PrizeImageMaxAggregateInputType = {
    id?: true;
    prizeId?: true;
    url?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type PrizeImageCountAggregateInputType = {
    id?: true;
    prizeId?: true;
    url?: true;
    sortOrder?: true;
    createdAt?: true;
    _all?: true;
};
export type PrizeImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PrizeImage to aggregate.
     */
    where?: Prisma.PrizeImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrizeImages to fetch.
     */
    orderBy?: Prisma.PrizeImageOrderByWithRelationInput | Prisma.PrizeImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PrizeImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrizeImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrizeImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PrizeImages
    **/
    _count?: true | PrizeImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PrizeImageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PrizeImageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PrizeImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PrizeImageMaxAggregateInputType;
};
export type GetPrizeImageAggregateType<T extends PrizeImageAggregateArgs> = {
    [P in keyof T & keyof AggregatePrizeImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrizeImage[P]> : Prisma.GetScalarType<T[P], AggregatePrizeImage[P]>;
};
export type PrizeImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrizeImageWhereInput;
    orderBy?: Prisma.PrizeImageOrderByWithAggregationInput | Prisma.PrizeImageOrderByWithAggregationInput[];
    by: Prisma.PrizeImageScalarFieldEnum[] | Prisma.PrizeImageScalarFieldEnum;
    having?: Prisma.PrizeImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrizeImageCountAggregateInputType | true;
    _avg?: PrizeImageAvgAggregateInputType;
    _sum?: PrizeImageSumAggregateInputType;
    _min?: PrizeImageMinAggregateInputType;
    _max?: PrizeImageMaxAggregateInputType;
};
export type PrizeImageGroupByOutputType = {
    id: string;
    prizeId: string;
    url: string;
    sortOrder: number;
    createdAt: Date;
    _count: PrizeImageCountAggregateOutputType | null;
    _avg: PrizeImageAvgAggregateOutputType | null;
    _sum: PrizeImageSumAggregateOutputType | null;
    _min: PrizeImageMinAggregateOutputType | null;
    _max: PrizeImageMaxAggregateOutputType | null;
};
export type GetPrizeImageGroupByPayload<T extends PrizeImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrizeImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrizeImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrizeImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrizeImageGroupByOutputType[P]>;
}>>;
export type PrizeImageWhereInput = {
    AND?: Prisma.PrizeImageWhereInput | Prisma.PrizeImageWhereInput[];
    OR?: Prisma.PrizeImageWhereInput[];
    NOT?: Prisma.PrizeImageWhereInput | Prisma.PrizeImageWhereInput[];
    id?: Prisma.StringFilter<"PrizeImage"> | string;
    prizeId?: Prisma.StringFilter<"PrizeImage"> | string;
    url?: Prisma.StringFilter<"PrizeImage"> | string;
    sortOrder?: Prisma.IntFilter<"PrizeImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"PrizeImage"> | Date | string;
    prize?: Prisma.XOR<Prisma.PrizeScalarRelationFilter, Prisma.PrizeWhereInput>;
};
export type PrizeImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    prizeId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    prize?: Prisma.PrizeOrderByWithRelationInput;
};
export type PrizeImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PrizeImageWhereInput | Prisma.PrizeImageWhereInput[];
    OR?: Prisma.PrizeImageWhereInput[];
    NOT?: Prisma.PrizeImageWhereInput | Prisma.PrizeImageWhereInput[];
    prizeId?: Prisma.StringFilter<"PrizeImage"> | string;
    url?: Prisma.StringFilter<"PrizeImage"> | string;
    sortOrder?: Prisma.IntFilter<"PrizeImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"PrizeImage"> | Date | string;
    prize?: Prisma.XOR<Prisma.PrizeScalarRelationFilter, Prisma.PrizeWhereInput>;
}, "id">;
export type PrizeImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    prizeId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PrizeImageCountOrderByAggregateInput;
    _avg?: Prisma.PrizeImageAvgOrderByAggregateInput;
    _max?: Prisma.PrizeImageMaxOrderByAggregateInput;
    _min?: Prisma.PrizeImageMinOrderByAggregateInput;
    _sum?: Prisma.PrizeImageSumOrderByAggregateInput;
};
export type PrizeImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrizeImageScalarWhereWithAggregatesInput | Prisma.PrizeImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrizeImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrizeImageScalarWhereWithAggregatesInput | Prisma.PrizeImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PrizeImage"> | string;
    prizeId?: Prisma.StringWithAggregatesFilter<"PrizeImage"> | string;
    url?: Prisma.StringWithAggregatesFilter<"PrizeImage"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"PrizeImage"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PrizeImage"> | Date | string;
};
export type PrizeImageCreateInput = {
    id?: string;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
    prize: Prisma.PrizeCreateNestedOneWithoutImagesInput;
};
export type PrizeImageUncheckedCreateInput = {
    id?: string;
    prizeId: string;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type PrizeImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prize?: Prisma.PrizeUpdateOneRequiredWithoutImagesNestedInput;
};
export type PrizeImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prizeId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeImageCreateManyInput = {
    id?: string;
    prizeId: string;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type PrizeImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prizeId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeImageListRelationFilter = {
    every?: Prisma.PrizeImageWhereInput;
    some?: Prisma.PrizeImageWhereInput;
    none?: Prisma.PrizeImageWhereInput;
};
export type PrizeImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PrizeImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prizeId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrizeImageAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PrizeImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prizeId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrizeImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    prizeId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrizeImageSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PrizeImageCreateNestedManyWithoutPrizeInput = {
    create?: Prisma.XOR<Prisma.PrizeImageCreateWithoutPrizeInput, Prisma.PrizeImageUncheckedCreateWithoutPrizeInput> | Prisma.PrizeImageCreateWithoutPrizeInput[] | Prisma.PrizeImageUncheckedCreateWithoutPrizeInput[];
    connectOrCreate?: Prisma.PrizeImageCreateOrConnectWithoutPrizeInput | Prisma.PrizeImageCreateOrConnectWithoutPrizeInput[];
    createMany?: Prisma.PrizeImageCreateManyPrizeInputEnvelope;
    connect?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
};
export type PrizeImageUncheckedCreateNestedManyWithoutPrizeInput = {
    create?: Prisma.XOR<Prisma.PrizeImageCreateWithoutPrizeInput, Prisma.PrizeImageUncheckedCreateWithoutPrizeInput> | Prisma.PrizeImageCreateWithoutPrizeInput[] | Prisma.PrizeImageUncheckedCreateWithoutPrizeInput[];
    connectOrCreate?: Prisma.PrizeImageCreateOrConnectWithoutPrizeInput | Prisma.PrizeImageCreateOrConnectWithoutPrizeInput[];
    createMany?: Prisma.PrizeImageCreateManyPrizeInputEnvelope;
    connect?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
};
export type PrizeImageUpdateManyWithoutPrizeNestedInput = {
    create?: Prisma.XOR<Prisma.PrizeImageCreateWithoutPrizeInput, Prisma.PrizeImageUncheckedCreateWithoutPrizeInput> | Prisma.PrizeImageCreateWithoutPrizeInput[] | Prisma.PrizeImageUncheckedCreateWithoutPrizeInput[];
    connectOrCreate?: Prisma.PrizeImageCreateOrConnectWithoutPrizeInput | Prisma.PrizeImageCreateOrConnectWithoutPrizeInput[];
    upsert?: Prisma.PrizeImageUpsertWithWhereUniqueWithoutPrizeInput | Prisma.PrizeImageUpsertWithWhereUniqueWithoutPrizeInput[];
    createMany?: Prisma.PrizeImageCreateManyPrizeInputEnvelope;
    set?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
    disconnect?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
    delete?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
    connect?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
    update?: Prisma.PrizeImageUpdateWithWhereUniqueWithoutPrizeInput | Prisma.PrizeImageUpdateWithWhereUniqueWithoutPrizeInput[];
    updateMany?: Prisma.PrizeImageUpdateManyWithWhereWithoutPrizeInput | Prisma.PrizeImageUpdateManyWithWhereWithoutPrizeInput[];
    deleteMany?: Prisma.PrizeImageScalarWhereInput | Prisma.PrizeImageScalarWhereInput[];
};
export type PrizeImageUncheckedUpdateManyWithoutPrizeNestedInput = {
    create?: Prisma.XOR<Prisma.PrizeImageCreateWithoutPrizeInput, Prisma.PrizeImageUncheckedCreateWithoutPrizeInput> | Prisma.PrizeImageCreateWithoutPrizeInput[] | Prisma.PrizeImageUncheckedCreateWithoutPrizeInput[];
    connectOrCreate?: Prisma.PrizeImageCreateOrConnectWithoutPrizeInput | Prisma.PrizeImageCreateOrConnectWithoutPrizeInput[];
    upsert?: Prisma.PrizeImageUpsertWithWhereUniqueWithoutPrizeInput | Prisma.PrizeImageUpsertWithWhereUniqueWithoutPrizeInput[];
    createMany?: Prisma.PrizeImageCreateManyPrizeInputEnvelope;
    set?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
    disconnect?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
    delete?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
    connect?: Prisma.PrizeImageWhereUniqueInput | Prisma.PrizeImageWhereUniqueInput[];
    update?: Prisma.PrizeImageUpdateWithWhereUniqueWithoutPrizeInput | Prisma.PrizeImageUpdateWithWhereUniqueWithoutPrizeInput[];
    updateMany?: Prisma.PrizeImageUpdateManyWithWhereWithoutPrizeInput | Prisma.PrizeImageUpdateManyWithWhereWithoutPrizeInput[];
    deleteMany?: Prisma.PrizeImageScalarWhereInput | Prisma.PrizeImageScalarWhereInput[];
};
export type PrizeImageCreateWithoutPrizeInput = {
    id?: string;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type PrizeImageUncheckedCreateWithoutPrizeInput = {
    id?: string;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type PrizeImageCreateOrConnectWithoutPrizeInput = {
    where: Prisma.PrizeImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrizeImageCreateWithoutPrizeInput, Prisma.PrizeImageUncheckedCreateWithoutPrizeInput>;
};
export type PrizeImageCreateManyPrizeInputEnvelope = {
    data: Prisma.PrizeImageCreateManyPrizeInput | Prisma.PrizeImageCreateManyPrizeInput[];
    skipDuplicates?: boolean;
};
export type PrizeImageUpsertWithWhereUniqueWithoutPrizeInput = {
    where: Prisma.PrizeImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrizeImageUpdateWithoutPrizeInput, Prisma.PrizeImageUncheckedUpdateWithoutPrizeInput>;
    create: Prisma.XOR<Prisma.PrizeImageCreateWithoutPrizeInput, Prisma.PrizeImageUncheckedCreateWithoutPrizeInput>;
};
export type PrizeImageUpdateWithWhereUniqueWithoutPrizeInput = {
    where: Prisma.PrizeImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrizeImageUpdateWithoutPrizeInput, Prisma.PrizeImageUncheckedUpdateWithoutPrizeInput>;
};
export type PrizeImageUpdateManyWithWhereWithoutPrizeInput = {
    where: Prisma.PrizeImageScalarWhereInput;
    data: Prisma.XOR<Prisma.PrizeImageUpdateManyMutationInput, Prisma.PrizeImageUncheckedUpdateManyWithoutPrizeInput>;
};
export type PrizeImageScalarWhereInput = {
    AND?: Prisma.PrizeImageScalarWhereInput | Prisma.PrizeImageScalarWhereInput[];
    OR?: Prisma.PrizeImageScalarWhereInput[];
    NOT?: Prisma.PrizeImageScalarWhereInput | Prisma.PrizeImageScalarWhereInput[];
    id?: Prisma.StringFilter<"PrizeImage"> | string;
    prizeId?: Prisma.StringFilter<"PrizeImage"> | string;
    url?: Prisma.StringFilter<"PrizeImage"> | string;
    sortOrder?: Prisma.IntFilter<"PrizeImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"PrizeImage"> | Date | string;
};
export type PrizeImageCreateManyPrizeInput = {
    id?: string;
    url: string;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type PrizeImageUpdateWithoutPrizeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeImageUncheckedUpdateWithoutPrizeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeImageUncheckedUpdateManyWithoutPrizeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prizeId?: boolean;
    url?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    prize?: boolean | Prisma.PrizeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prizeImage"]>;
export type PrizeImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prizeId?: boolean;
    url?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    prize?: boolean | Prisma.PrizeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prizeImage"]>;
export type PrizeImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    prizeId?: boolean;
    url?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    prize?: boolean | Prisma.PrizeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prizeImage"]>;
export type PrizeImageSelectScalar = {
    id?: boolean;
    prizeId?: boolean;
    url?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
};
export type PrizeImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "prizeId" | "url" | "sortOrder" | "createdAt", ExtArgs["result"]["prizeImage"]>;
export type PrizeImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prize?: boolean | Prisma.PrizeDefaultArgs<ExtArgs>;
};
export type PrizeImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prize?: boolean | Prisma.PrizeDefaultArgs<ExtArgs>;
};
export type PrizeImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prize?: boolean | Prisma.PrizeDefaultArgs<ExtArgs>;
};
export type $PrizeImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PrizeImage";
    objects: {
        prize: Prisma.$PrizePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        prizeId: string;
        url: string;
        sortOrder: number;
        createdAt: Date;
    }, ExtArgs["result"]["prizeImage"]>;
    composites: {};
};
export type PrizeImageGetPayload<S extends boolean | null | undefined | PrizeImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload, S>;
export type PrizeImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrizeImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrizeImageCountAggregateInputType | true;
};
export interface PrizeImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PrizeImage'];
        meta: {
            name: 'PrizeImage';
        };
    };
    /**
     * Find zero or one PrizeImage that matches the filter.
     * @param {PrizeImageFindUniqueArgs} args - Arguments to find a PrizeImage
     * @example
     * // Get one PrizeImage
     * const prizeImage = await prisma.prizeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrizeImageFindUniqueArgs>(args: Prisma.SelectSubset<T, PrizeImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrizeImageClient<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PrizeImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrizeImageFindUniqueOrThrowArgs} args - Arguments to find a PrizeImage
     * @example
     * // Get one PrizeImage
     * const prizeImage = await prisma.prizeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrizeImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrizeImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrizeImageClient<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PrizeImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeImageFindFirstArgs} args - Arguments to find a PrizeImage
     * @example
     * // Get one PrizeImage
     * const prizeImage = await prisma.prizeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrizeImageFindFirstArgs>(args?: Prisma.SelectSubset<T, PrizeImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrizeImageClient<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PrizeImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeImageFindFirstOrThrowArgs} args - Arguments to find a PrizeImage
     * @example
     * // Get one PrizeImage
     * const prizeImage = await prisma.prizeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrizeImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrizeImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrizeImageClient<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PrizeImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrizeImages
     * const prizeImages = await prisma.prizeImage.findMany()
     *
     * // Get first 10 PrizeImages
     * const prizeImages = await prisma.prizeImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const prizeImageWithIdOnly = await prisma.prizeImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PrizeImageFindManyArgs>(args?: Prisma.SelectSubset<T, PrizeImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PrizeImage.
     * @param {PrizeImageCreateArgs} args - Arguments to create a PrizeImage.
     * @example
     * // Create one PrizeImage
     * const PrizeImage = await prisma.prizeImage.create({
     *   data: {
     *     // ... data to create a PrizeImage
     *   }
     * })
     *
     */
    create<T extends PrizeImageCreateArgs>(args: Prisma.SelectSubset<T, PrizeImageCreateArgs<ExtArgs>>): Prisma.Prisma__PrizeImageClient<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PrizeImages.
     * @param {PrizeImageCreateManyArgs} args - Arguments to create many PrizeImages.
     * @example
     * // Create many PrizeImages
     * const prizeImage = await prisma.prizeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PrizeImageCreateManyArgs>(args?: Prisma.SelectSubset<T, PrizeImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PrizeImages and returns the data saved in the database.
     * @param {PrizeImageCreateManyAndReturnArgs} args - Arguments to create many PrizeImages.
     * @example
     * // Create many PrizeImages
     * const prizeImage = await prisma.prizeImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PrizeImages and only return the `id`
     * const prizeImageWithIdOnly = await prisma.prizeImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PrizeImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrizeImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PrizeImage.
     * @param {PrizeImageDeleteArgs} args - Arguments to delete one PrizeImage.
     * @example
     * // Delete one PrizeImage
     * const PrizeImage = await prisma.prizeImage.delete({
     *   where: {
     *     // ... filter to delete one PrizeImage
     *   }
     * })
     *
     */
    delete<T extends PrizeImageDeleteArgs>(args: Prisma.SelectSubset<T, PrizeImageDeleteArgs<ExtArgs>>): Prisma.Prisma__PrizeImageClient<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PrizeImage.
     * @param {PrizeImageUpdateArgs} args - Arguments to update one PrizeImage.
     * @example
     * // Update one PrizeImage
     * const prizeImage = await prisma.prizeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PrizeImageUpdateArgs>(args: Prisma.SelectSubset<T, PrizeImageUpdateArgs<ExtArgs>>): Prisma.Prisma__PrizeImageClient<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PrizeImages.
     * @param {PrizeImageDeleteManyArgs} args - Arguments to filter PrizeImages to delete.
     * @example
     * // Delete a few PrizeImages
     * const { count } = await prisma.prizeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PrizeImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrizeImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PrizeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrizeImages
     * const prizeImage = await prisma.prizeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PrizeImageUpdateManyArgs>(args: Prisma.SelectSubset<T, PrizeImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PrizeImages and returns the data updated in the database.
     * @param {PrizeImageUpdateManyAndReturnArgs} args - Arguments to update many PrizeImages.
     * @example
     * // Update many PrizeImages
     * const prizeImage = await prisma.prizeImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PrizeImages and only return the `id`
     * const prizeImageWithIdOnly = await prisma.prizeImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrizeImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrizeImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PrizeImage.
     * @param {PrizeImageUpsertArgs} args - Arguments to update or create a PrizeImage.
     * @example
     * // Update or create a PrizeImage
     * const prizeImage = await prisma.prizeImage.upsert({
     *   create: {
     *     // ... data to create a PrizeImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrizeImage we want to update
     *   }
     * })
     */
    upsert<T extends PrizeImageUpsertArgs>(args: Prisma.SelectSubset<T, PrizeImageUpsertArgs<ExtArgs>>): Prisma.Prisma__PrizeImageClient<runtime.Types.Result.GetResult<Prisma.$PrizeImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PrizeImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeImageCountArgs} args - Arguments to filter PrizeImages to count.
     * @example
     * // Count the number of PrizeImages
     * const count = await prisma.prizeImage.count({
     *   where: {
     *     // ... the filter for the PrizeImages we want to count
     *   }
     * })
    **/
    count<T extends PrizeImageCountArgs>(args?: Prisma.Subset<T, PrizeImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrizeImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PrizeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrizeImageAggregateArgs>(args: Prisma.Subset<T, PrizeImageAggregateArgs>): Prisma.PrismaPromise<GetPrizeImageAggregateType<T>>;
    /**
     * Group by PrizeImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeImageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PrizeImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrizeImageGroupByArgs['orderBy'];
    } : {
        orderBy?: PrizeImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrizeImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrizeImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PrizeImage model
     */
    readonly fields: PrizeImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PrizeImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PrizeImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    prize<T extends Prisma.PrizeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PrizeDefaultArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PrizeImage model
 */
export interface PrizeImageFieldRefs {
    readonly id: Prisma.FieldRef<"PrizeImage", 'String'>;
    readonly prizeId: Prisma.FieldRef<"PrizeImage", 'String'>;
    readonly url: Prisma.FieldRef<"PrizeImage", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"PrizeImage", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"PrizeImage", 'DateTime'>;
}
/**
 * PrizeImage findUnique
 */
export type PrizeImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PrizeImage to fetch.
     */
    where: Prisma.PrizeImageWhereUniqueInput;
};
/**
 * PrizeImage findUniqueOrThrow
 */
export type PrizeImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PrizeImage to fetch.
     */
    where: Prisma.PrizeImageWhereUniqueInput;
};
/**
 * PrizeImage findFirst
 */
export type PrizeImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PrizeImage to fetch.
     */
    where?: Prisma.PrizeImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrizeImages to fetch.
     */
    orderBy?: Prisma.PrizeImageOrderByWithRelationInput | Prisma.PrizeImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PrizeImages.
     */
    cursor?: Prisma.PrizeImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrizeImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrizeImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrizeImages.
     */
    distinct?: Prisma.PrizeImageScalarFieldEnum | Prisma.PrizeImageScalarFieldEnum[];
};
/**
 * PrizeImage findFirstOrThrow
 */
export type PrizeImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PrizeImage to fetch.
     */
    where?: Prisma.PrizeImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrizeImages to fetch.
     */
    orderBy?: Prisma.PrizeImageOrderByWithRelationInput | Prisma.PrizeImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PrizeImages.
     */
    cursor?: Prisma.PrizeImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrizeImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrizeImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrizeImages.
     */
    distinct?: Prisma.PrizeImageScalarFieldEnum | Prisma.PrizeImageScalarFieldEnum[];
};
/**
 * PrizeImage findMany
 */
export type PrizeImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PrizeImages to fetch.
     */
    where?: Prisma.PrizeImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrizeImages to fetch.
     */
    orderBy?: Prisma.PrizeImageOrderByWithRelationInput | Prisma.PrizeImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PrizeImages.
     */
    cursor?: Prisma.PrizeImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrizeImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrizeImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrizeImages.
     */
    distinct?: Prisma.PrizeImageScalarFieldEnum | Prisma.PrizeImageScalarFieldEnum[];
};
/**
 * PrizeImage create
 */
export type PrizeImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a PrizeImage.
     */
    data: Prisma.XOR<Prisma.PrizeImageCreateInput, Prisma.PrizeImageUncheckedCreateInput>;
};
/**
 * PrizeImage createMany
 */
export type PrizeImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrizeImages.
     */
    data: Prisma.PrizeImageCreateManyInput | Prisma.PrizeImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PrizeImage createManyAndReturn
 */
export type PrizeImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeImage
     */
    select?: Prisma.PrizeImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeImage
     */
    omit?: Prisma.PrizeImageOmit<ExtArgs> | null;
    /**
     * The data used to create many PrizeImages.
     */
    data: Prisma.PrizeImageCreateManyInput | Prisma.PrizeImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PrizeImage update
 */
export type PrizeImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a PrizeImage.
     */
    data: Prisma.XOR<Prisma.PrizeImageUpdateInput, Prisma.PrizeImageUncheckedUpdateInput>;
    /**
     * Choose, which PrizeImage to update.
     */
    where: Prisma.PrizeImageWhereUniqueInput;
};
/**
 * PrizeImage updateMany
 */
export type PrizeImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PrizeImages.
     */
    data: Prisma.XOR<Prisma.PrizeImageUpdateManyMutationInput, Prisma.PrizeImageUncheckedUpdateManyInput>;
    /**
     * Filter which PrizeImages to update
     */
    where?: Prisma.PrizeImageWhereInput;
    /**
     * Limit how many PrizeImages to update.
     */
    limit?: number;
};
/**
 * PrizeImage updateManyAndReturn
 */
export type PrizeImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeImage
     */
    select?: Prisma.PrizeImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeImage
     */
    omit?: Prisma.PrizeImageOmit<ExtArgs> | null;
    /**
     * The data used to update PrizeImages.
     */
    data: Prisma.XOR<Prisma.PrizeImageUpdateManyMutationInput, Prisma.PrizeImageUncheckedUpdateManyInput>;
    /**
     * Filter which PrizeImages to update
     */
    where?: Prisma.PrizeImageWhereInput;
    /**
     * Limit how many PrizeImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PrizeImage upsert
 */
export type PrizeImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the PrizeImage to update in case it exists.
     */
    where: Prisma.PrizeImageWhereUniqueInput;
    /**
     * In case the PrizeImage found by the `where` argument doesn't exist, create a new PrizeImage with this data.
     */
    create: Prisma.XOR<Prisma.PrizeImageCreateInput, Prisma.PrizeImageUncheckedCreateInput>;
    /**
     * In case the PrizeImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PrizeImageUpdateInput, Prisma.PrizeImageUncheckedUpdateInput>;
};
/**
 * PrizeImage delete
 */
export type PrizeImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which PrizeImage to delete.
     */
    where: Prisma.PrizeImageWhereUniqueInput;
};
/**
 * PrizeImage deleteMany
 */
export type PrizeImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PrizeImages to delete
     */
    where?: Prisma.PrizeImageWhereInput;
    /**
     * Limit how many PrizeImages to delete.
     */
    limit?: number;
};
/**
 * PrizeImage without action
 */
export type PrizeImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=PrizeImage.d.ts.map