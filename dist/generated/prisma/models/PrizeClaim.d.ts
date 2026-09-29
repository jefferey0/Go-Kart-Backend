import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model PrizeClaim
 *
 */
export type PrizeClaimModel = runtime.Types.Result.DefaultSelection<Prisma.$PrizeClaimPayload>;
export type AggregatePrizeClaim = {
    _count: PrizeClaimCountAggregateOutputType | null;
    _min: PrizeClaimMinAggregateOutputType | null;
    _max: PrizeClaimMaxAggregateOutputType | null;
};
export type PrizeClaimMinAggregateOutputType = {
    id: string | null;
    winnerId: string | null;
    status: $Enums.PrizeClaimStatus | null;
    claimedAt: Date | null;
    deliveredAt: Date | null;
    confirmedAt: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PrizeClaimMaxAggregateOutputType = {
    id: string | null;
    winnerId: string | null;
    status: $Enums.PrizeClaimStatus | null;
    claimedAt: Date | null;
    deliveredAt: Date | null;
    confirmedAt: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PrizeClaimCountAggregateOutputType = {
    id: number;
    winnerId: number;
    status: number;
    claimedAt: number;
    deliveredAt: number;
    confirmedAt: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PrizeClaimMinAggregateInputType = {
    id?: true;
    winnerId?: true;
    status?: true;
    claimedAt?: true;
    deliveredAt?: true;
    confirmedAt?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PrizeClaimMaxAggregateInputType = {
    id?: true;
    winnerId?: true;
    status?: true;
    claimedAt?: true;
    deliveredAt?: true;
    confirmedAt?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PrizeClaimCountAggregateInputType = {
    id?: true;
    winnerId?: true;
    status?: true;
    claimedAt?: true;
    deliveredAt?: true;
    confirmedAt?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PrizeClaimAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PrizeClaim to aggregate.
     */
    where?: Prisma.PrizeClaimWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrizeClaims to fetch.
     */
    orderBy?: Prisma.PrizeClaimOrderByWithRelationInput | Prisma.PrizeClaimOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PrizeClaimWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrizeClaims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrizeClaims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PrizeClaims
    **/
    _count?: true | PrizeClaimCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PrizeClaimMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PrizeClaimMaxAggregateInputType;
};
export type GetPrizeClaimAggregateType<T extends PrizeClaimAggregateArgs> = {
    [P in keyof T & keyof AggregatePrizeClaim]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrizeClaim[P]> : Prisma.GetScalarType<T[P], AggregatePrizeClaim[P]>;
};
export type PrizeClaimGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrizeClaimWhereInput;
    orderBy?: Prisma.PrizeClaimOrderByWithAggregationInput | Prisma.PrizeClaimOrderByWithAggregationInput[];
    by: Prisma.PrizeClaimScalarFieldEnum[] | Prisma.PrizeClaimScalarFieldEnum;
    having?: Prisma.PrizeClaimScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrizeClaimCountAggregateInputType | true;
    _min?: PrizeClaimMinAggregateInputType;
    _max?: PrizeClaimMaxAggregateInputType;
};
export type PrizeClaimGroupByOutputType = {
    id: string;
    winnerId: string;
    status: $Enums.PrizeClaimStatus;
    claimedAt: Date | null;
    deliveredAt: Date | null;
    confirmedAt: Date | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PrizeClaimCountAggregateOutputType | null;
    _min: PrizeClaimMinAggregateOutputType | null;
    _max: PrizeClaimMaxAggregateOutputType | null;
};
export type GetPrizeClaimGroupByPayload<T extends PrizeClaimGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrizeClaimGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrizeClaimGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrizeClaimGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrizeClaimGroupByOutputType[P]>;
}>>;
export type PrizeClaimWhereInput = {
    AND?: Prisma.PrizeClaimWhereInput | Prisma.PrizeClaimWhereInput[];
    OR?: Prisma.PrizeClaimWhereInput[];
    NOT?: Prisma.PrizeClaimWhereInput | Prisma.PrizeClaimWhereInput[];
    id?: Prisma.StringFilter<"PrizeClaim"> | string;
    winnerId?: Prisma.StringFilter<"PrizeClaim"> | string;
    status?: Prisma.EnumPrizeClaimStatusFilter<"PrizeClaim"> | $Enums.PrizeClaimStatus;
    claimedAt?: Prisma.DateTimeNullableFilter<"PrizeClaim"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"PrizeClaim"> | Date | string | null;
    confirmedAt?: Prisma.DateTimeNullableFilter<"PrizeClaim"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"PrizeClaim"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PrizeClaim"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PrizeClaim"> | Date | string;
    winner?: Prisma.XOR<Prisma.WinnerScalarRelationFilter, Prisma.WinnerWhereInput>;
};
export type PrizeClaimOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    winner?: Prisma.WinnerOrderByWithRelationInput;
};
export type PrizeClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    winnerId?: string;
    AND?: Prisma.PrizeClaimWhereInput | Prisma.PrizeClaimWhereInput[];
    OR?: Prisma.PrizeClaimWhereInput[];
    NOT?: Prisma.PrizeClaimWhereInput | Prisma.PrizeClaimWhereInput[];
    status?: Prisma.EnumPrizeClaimStatusFilter<"PrizeClaim"> | $Enums.PrizeClaimStatus;
    claimedAt?: Prisma.DateTimeNullableFilter<"PrizeClaim"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"PrizeClaim"> | Date | string | null;
    confirmedAt?: Prisma.DateTimeNullableFilter<"PrizeClaim"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"PrizeClaim"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PrizeClaim"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PrizeClaim"> | Date | string;
    winner?: Prisma.XOR<Prisma.WinnerScalarRelationFilter, Prisma.WinnerWhereInput>;
}, "id" | "winnerId">;
export type PrizeClaimOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PrizeClaimCountOrderByAggregateInput;
    _max?: Prisma.PrizeClaimMaxOrderByAggregateInput;
    _min?: Prisma.PrizeClaimMinOrderByAggregateInput;
};
export type PrizeClaimScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrizeClaimScalarWhereWithAggregatesInput | Prisma.PrizeClaimScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrizeClaimScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrizeClaimScalarWhereWithAggregatesInput | Prisma.PrizeClaimScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PrizeClaim"> | string;
    winnerId?: Prisma.StringWithAggregatesFilter<"PrizeClaim"> | string;
    status?: Prisma.EnumPrizeClaimStatusWithAggregatesFilter<"PrizeClaim"> | $Enums.PrizeClaimStatus;
    claimedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PrizeClaim"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PrizeClaim"> | Date | string | null;
    confirmedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PrizeClaim"> | Date | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"PrizeClaim"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PrizeClaim"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PrizeClaim"> | Date | string;
};
export type PrizeClaimCreateInput = {
    id?: string;
    status?: $Enums.PrizeClaimStatus;
    claimedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    confirmedAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    winner: Prisma.WinnerCreateNestedOneWithoutClaimInput;
};
export type PrizeClaimUncheckedCreateInput = {
    id?: string;
    winnerId: string;
    status?: $Enums.PrizeClaimStatus;
    claimedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    confirmedAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrizeClaimUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPrizeClaimStatusFieldUpdateOperationsInput | $Enums.PrizeClaimStatus;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    winner?: Prisma.WinnerUpdateOneRequiredWithoutClaimNestedInput;
};
export type PrizeClaimUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    winnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPrizeClaimStatusFieldUpdateOperationsInput | $Enums.PrizeClaimStatus;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeClaimCreateManyInput = {
    id?: string;
    winnerId: string;
    status?: $Enums.PrizeClaimStatus;
    claimedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    confirmedAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrizeClaimUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPrizeClaimStatusFieldUpdateOperationsInput | $Enums.PrizeClaimStatus;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeClaimUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    winnerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPrizeClaimStatusFieldUpdateOperationsInput | $Enums.PrizeClaimStatus;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeClaimNullableScalarRelationFilter = {
    is?: Prisma.PrizeClaimWhereInput | null;
    isNot?: Prisma.PrizeClaimWhereInput | null;
};
export type PrizeClaimCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrizeClaimMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrizeClaimMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    winnerId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimedAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrizeClaimCreateNestedOneWithoutWinnerInput = {
    create?: Prisma.XOR<Prisma.PrizeClaimCreateWithoutWinnerInput, Prisma.PrizeClaimUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: Prisma.PrizeClaimCreateOrConnectWithoutWinnerInput;
    connect?: Prisma.PrizeClaimWhereUniqueInput;
};
export type PrizeClaimUncheckedCreateNestedOneWithoutWinnerInput = {
    create?: Prisma.XOR<Prisma.PrizeClaimCreateWithoutWinnerInput, Prisma.PrizeClaimUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: Prisma.PrizeClaimCreateOrConnectWithoutWinnerInput;
    connect?: Prisma.PrizeClaimWhereUniqueInput;
};
export type PrizeClaimUpdateOneWithoutWinnerNestedInput = {
    create?: Prisma.XOR<Prisma.PrizeClaimCreateWithoutWinnerInput, Prisma.PrizeClaimUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: Prisma.PrizeClaimCreateOrConnectWithoutWinnerInput;
    upsert?: Prisma.PrizeClaimUpsertWithoutWinnerInput;
    disconnect?: Prisma.PrizeClaimWhereInput | boolean;
    delete?: Prisma.PrizeClaimWhereInput | boolean;
    connect?: Prisma.PrizeClaimWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PrizeClaimUpdateToOneWithWhereWithoutWinnerInput, Prisma.PrizeClaimUpdateWithoutWinnerInput>, Prisma.PrizeClaimUncheckedUpdateWithoutWinnerInput>;
};
export type PrizeClaimUncheckedUpdateOneWithoutWinnerNestedInput = {
    create?: Prisma.XOR<Prisma.PrizeClaimCreateWithoutWinnerInput, Prisma.PrizeClaimUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: Prisma.PrizeClaimCreateOrConnectWithoutWinnerInput;
    upsert?: Prisma.PrizeClaimUpsertWithoutWinnerInput;
    disconnect?: Prisma.PrizeClaimWhereInput | boolean;
    delete?: Prisma.PrizeClaimWhereInput | boolean;
    connect?: Prisma.PrizeClaimWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PrizeClaimUpdateToOneWithWhereWithoutWinnerInput, Prisma.PrizeClaimUpdateWithoutWinnerInput>, Prisma.PrizeClaimUncheckedUpdateWithoutWinnerInput>;
};
export type EnumPrizeClaimStatusFieldUpdateOperationsInput = {
    set?: $Enums.PrizeClaimStatus;
};
export type PrizeClaimCreateWithoutWinnerInput = {
    id?: string;
    status?: $Enums.PrizeClaimStatus;
    claimedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    confirmedAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrizeClaimUncheckedCreateWithoutWinnerInput = {
    id?: string;
    status?: $Enums.PrizeClaimStatus;
    claimedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    confirmedAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrizeClaimCreateOrConnectWithoutWinnerInput = {
    where: Prisma.PrizeClaimWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrizeClaimCreateWithoutWinnerInput, Prisma.PrizeClaimUncheckedCreateWithoutWinnerInput>;
};
export type PrizeClaimUpsertWithoutWinnerInput = {
    update: Prisma.XOR<Prisma.PrizeClaimUpdateWithoutWinnerInput, Prisma.PrizeClaimUncheckedUpdateWithoutWinnerInput>;
    create: Prisma.XOR<Prisma.PrizeClaimCreateWithoutWinnerInput, Prisma.PrizeClaimUncheckedCreateWithoutWinnerInput>;
    where?: Prisma.PrizeClaimWhereInput;
};
export type PrizeClaimUpdateToOneWithWhereWithoutWinnerInput = {
    where?: Prisma.PrizeClaimWhereInput;
    data: Prisma.XOR<Prisma.PrizeClaimUpdateWithoutWinnerInput, Prisma.PrizeClaimUncheckedUpdateWithoutWinnerInput>;
};
export type PrizeClaimUpdateWithoutWinnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPrizeClaimStatusFieldUpdateOperationsInput | $Enums.PrizeClaimStatus;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeClaimUncheckedUpdateWithoutWinnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPrizeClaimStatusFieldUpdateOperationsInput | $Enums.PrizeClaimStatus;
    claimedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrizeClaimSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    winnerId?: boolean;
    status?: boolean;
    claimedAt?: boolean;
    deliveredAt?: boolean;
    confirmedAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    winner?: boolean | Prisma.WinnerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prizeClaim"]>;
export type PrizeClaimSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    winnerId?: boolean;
    status?: boolean;
    claimedAt?: boolean;
    deliveredAt?: boolean;
    confirmedAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    winner?: boolean | Prisma.WinnerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prizeClaim"]>;
export type PrizeClaimSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    winnerId?: boolean;
    status?: boolean;
    claimedAt?: boolean;
    deliveredAt?: boolean;
    confirmedAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    winner?: boolean | Prisma.WinnerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prizeClaim"]>;
export type PrizeClaimSelectScalar = {
    id?: boolean;
    winnerId?: boolean;
    status?: boolean;
    claimedAt?: boolean;
    deliveredAt?: boolean;
    confirmedAt?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PrizeClaimOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "winnerId" | "status" | "claimedAt" | "deliveredAt" | "confirmedAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["prizeClaim"]>;
export type PrizeClaimInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    winner?: boolean | Prisma.WinnerDefaultArgs<ExtArgs>;
};
export type PrizeClaimIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    winner?: boolean | Prisma.WinnerDefaultArgs<ExtArgs>;
};
export type PrizeClaimIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    winner?: boolean | Prisma.WinnerDefaultArgs<ExtArgs>;
};
export type $PrizeClaimPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PrizeClaim";
    objects: {
        winner: Prisma.$WinnerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        winnerId: string;
        status: $Enums.PrizeClaimStatus;
        claimedAt: Date | null;
        deliveredAt: Date | null;
        confirmedAt: Date | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["prizeClaim"]>;
    composites: {};
};
export type PrizeClaimGetPayload<S extends boolean | null | undefined | PrizeClaimDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload, S>;
export type PrizeClaimCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrizeClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrizeClaimCountAggregateInputType | true;
};
export interface PrizeClaimDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PrizeClaim'];
        meta: {
            name: 'PrizeClaim';
        };
    };
    /**
     * Find zero or one PrizeClaim that matches the filter.
     * @param {PrizeClaimFindUniqueArgs} args - Arguments to find a PrizeClaim
     * @example
     * // Get one PrizeClaim
     * const prizeClaim = await prisma.prizeClaim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrizeClaimFindUniqueArgs>(args: Prisma.SelectSubset<T, PrizeClaimFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrizeClaimClient<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PrizeClaim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrizeClaimFindUniqueOrThrowArgs} args - Arguments to find a PrizeClaim
     * @example
     * // Get one PrizeClaim
     * const prizeClaim = await prisma.prizeClaim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrizeClaimFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrizeClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrizeClaimClient<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PrizeClaim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeClaimFindFirstArgs} args - Arguments to find a PrizeClaim
     * @example
     * // Get one PrizeClaim
     * const prizeClaim = await prisma.prizeClaim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrizeClaimFindFirstArgs>(args?: Prisma.SelectSubset<T, PrizeClaimFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrizeClaimClient<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PrizeClaim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeClaimFindFirstOrThrowArgs} args - Arguments to find a PrizeClaim
     * @example
     * // Get one PrizeClaim
     * const prizeClaim = await prisma.prizeClaim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrizeClaimFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrizeClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrizeClaimClient<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PrizeClaims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrizeClaims
     * const prizeClaims = await prisma.prizeClaim.findMany()
     *
     * // Get first 10 PrizeClaims
     * const prizeClaims = await prisma.prizeClaim.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const prizeClaimWithIdOnly = await prisma.prizeClaim.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PrizeClaimFindManyArgs>(args?: Prisma.SelectSubset<T, PrizeClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PrizeClaim.
     * @param {PrizeClaimCreateArgs} args - Arguments to create a PrizeClaim.
     * @example
     * // Create one PrizeClaim
     * const PrizeClaim = await prisma.prizeClaim.create({
     *   data: {
     *     // ... data to create a PrizeClaim
     *   }
     * })
     *
     */
    create<T extends PrizeClaimCreateArgs>(args: Prisma.SelectSubset<T, PrizeClaimCreateArgs<ExtArgs>>): Prisma.Prisma__PrizeClaimClient<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PrizeClaims.
     * @param {PrizeClaimCreateManyArgs} args - Arguments to create many PrizeClaims.
     * @example
     * // Create many PrizeClaims
     * const prizeClaim = await prisma.prizeClaim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PrizeClaimCreateManyArgs>(args?: Prisma.SelectSubset<T, PrizeClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PrizeClaims and returns the data saved in the database.
     * @param {PrizeClaimCreateManyAndReturnArgs} args - Arguments to create many PrizeClaims.
     * @example
     * // Create many PrizeClaims
     * const prizeClaim = await prisma.prizeClaim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PrizeClaims and only return the `id`
     * const prizeClaimWithIdOnly = await prisma.prizeClaim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PrizeClaimCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrizeClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PrizeClaim.
     * @param {PrizeClaimDeleteArgs} args - Arguments to delete one PrizeClaim.
     * @example
     * // Delete one PrizeClaim
     * const PrizeClaim = await prisma.prizeClaim.delete({
     *   where: {
     *     // ... filter to delete one PrizeClaim
     *   }
     * })
     *
     */
    delete<T extends PrizeClaimDeleteArgs>(args: Prisma.SelectSubset<T, PrizeClaimDeleteArgs<ExtArgs>>): Prisma.Prisma__PrizeClaimClient<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PrizeClaim.
     * @param {PrizeClaimUpdateArgs} args - Arguments to update one PrizeClaim.
     * @example
     * // Update one PrizeClaim
     * const prizeClaim = await prisma.prizeClaim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PrizeClaimUpdateArgs>(args: Prisma.SelectSubset<T, PrizeClaimUpdateArgs<ExtArgs>>): Prisma.Prisma__PrizeClaimClient<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PrizeClaims.
     * @param {PrizeClaimDeleteManyArgs} args - Arguments to filter PrizeClaims to delete.
     * @example
     * // Delete a few PrizeClaims
     * const { count } = await prisma.prizeClaim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PrizeClaimDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrizeClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PrizeClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrizeClaims
     * const prizeClaim = await prisma.prizeClaim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PrizeClaimUpdateManyArgs>(args: Prisma.SelectSubset<T, PrizeClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PrizeClaims and returns the data updated in the database.
     * @param {PrizeClaimUpdateManyAndReturnArgs} args - Arguments to update many PrizeClaims.
     * @example
     * // Update many PrizeClaims
     * const prizeClaim = await prisma.prizeClaim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PrizeClaims and only return the `id`
     * const prizeClaimWithIdOnly = await prisma.prizeClaim.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrizeClaimUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrizeClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PrizeClaim.
     * @param {PrizeClaimUpsertArgs} args - Arguments to update or create a PrizeClaim.
     * @example
     * // Update or create a PrizeClaim
     * const prizeClaim = await prisma.prizeClaim.upsert({
     *   create: {
     *     // ... data to create a PrizeClaim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrizeClaim we want to update
     *   }
     * })
     */
    upsert<T extends PrizeClaimUpsertArgs>(args: Prisma.SelectSubset<T, PrizeClaimUpsertArgs<ExtArgs>>): Prisma.Prisma__PrizeClaimClient<runtime.Types.Result.GetResult<Prisma.$PrizeClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PrizeClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeClaimCountArgs} args - Arguments to filter PrizeClaims to count.
     * @example
     * // Count the number of PrizeClaims
     * const count = await prisma.prizeClaim.count({
     *   where: {
     *     // ... the filter for the PrizeClaims we want to count
     *   }
     * })
    **/
    count<T extends PrizeClaimCountArgs>(args?: Prisma.Subset<T, PrizeClaimCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrizeClaimCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PrizeClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrizeClaimAggregateArgs>(args: Prisma.Subset<T, PrizeClaimAggregateArgs>): Prisma.PrismaPromise<GetPrizeClaimAggregateType<T>>;
    /**
     * Group by PrizeClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrizeClaimGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PrizeClaimGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrizeClaimGroupByArgs['orderBy'];
    } : {
        orderBy?: PrizeClaimGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrizeClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrizeClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PrizeClaim model
     */
    readonly fields: PrizeClaimFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PrizeClaim.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PrizeClaimClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    winner<T extends Prisma.WinnerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WinnerDefaultArgs<ExtArgs>>): Prisma.Prisma__WinnerClient<runtime.Types.Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the PrizeClaim model
 */
export interface PrizeClaimFieldRefs {
    readonly id: Prisma.FieldRef<"PrizeClaim", 'String'>;
    readonly winnerId: Prisma.FieldRef<"PrizeClaim", 'String'>;
    readonly status: Prisma.FieldRef<"PrizeClaim", 'PrizeClaimStatus'>;
    readonly claimedAt: Prisma.FieldRef<"PrizeClaim", 'DateTime'>;
    readonly deliveredAt: Prisma.FieldRef<"PrizeClaim", 'DateTime'>;
    readonly confirmedAt: Prisma.FieldRef<"PrizeClaim", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"PrizeClaim", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PrizeClaim", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PrizeClaim", 'DateTime'>;
}
/**
 * PrizeClaim findUnique
 */
export type PrizeClaimFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
    /**
     * Filter, which PrizeClaim to fetch.
     */
    where: Prisma.PrizeClaimWhereUniqueInput;
};
/**
 * PrizeClaim findUniqueOrThrow
 */
export type PrizeClaimFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
    /**
     * Filter, which PrizeClaim to fetch.
     */
    where: Prisma.PrizeClaimWhereUniqueInput;
};
/**
 * PrizeClaim findFirst
 */
export type PrizeClaimFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
    /**
     * Filter, which PrizeClaim to fetch.
     */
    where?: Prisma.PrizeClaimWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrizeClaims to fetch.
     */
    orderBy?: Prisma.PrizeClaimOrderByWithRelationInput | Prisma.PrizeClaimOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PrizeClaims.
     */
    cursor?: Prisma.PrizeClaimWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrizeClaims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrizeClaims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrizeClaims.
     */
    distinct?: Prisma.PrizeClaimScalarFieldEnum | Prisma.PrizeClaimScalarFieldEnum[];
};
/**
 * PrizeClaim findFirstOrThrow
 */
export type PrizeClaimFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
    /**
     * Filter, which PrizeClaim to fetch.
     */
    where?: Prisma.PrizeClaimWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrizeClaims to fetch.
     */
    orderBy?: Prisma.PrizeClaimOrderByWithRelationInput | Prisma.PrizeClaimOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PrizeClaims.
     */
    cursor?: Prisma.PrizeClaimWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrizeClaims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrizeClaims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrizeClaims.
     */
    distinct?: Prisma.PrizeClaimScalarFieldEnum | Prisma.PrizeClaimScalarFieldEnum[];
};
/**
 * PrizeClaim findMany
 */
export type PrizeClaimFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
    /**
     * Filter, which PrizeClaims to fetch.
     */
    where?: Prisma.PrizeClaimWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PrizeClaims to fetch.
     */
    orderBy?: Prisma.PrizeClaimOrderByWithRelationInput | Prisma.PrizeClaimOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PrizeClaims.
     */
    cursor?: Prisma.PrizeClaimWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PrizeClaims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PrizeClaims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PrizeClaims.
     */
    distinct?: Prisma.PrizeClaimScalarFieldEnum | Prisma.PrizeClaimScalarFieldEnum[];
};
/**
 * PrizeClaim create
 */
export type PrizeClaimCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
    /**
     * The data needed to create a PrizeClaim.
     */
    data: Prisma.XOR<Prisma.PrizeClaimCreateInput, Prisma.PrizeClaimUncheckedCreateInput>;
};
/**
 * PrizeClaim createMany
 */
export type PrizeClaimCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrizeClaims.
     */
    data: Prisma.PrizeClaimCreateManyInput | Prisma.PrizeClaimCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PrizeClaim createManyAndReturn
 */
export type PrizeClaimCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * The data used to create many PrizeClaims.
     */
    data: Prisma.PrizeClaimCreateManyInput | Prisma.PrizeClaimCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PrizeClaim update
 */
export type PrizeClaimUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
    /**
     * The data needed to update a PrizeClaim.
     */
    data: Prisma.XOR<Prisma.PrizeClaimUpdateInput, Prisma.PrizeClaimUncheckedUpdateInput>;
    /**
     * Choose, which PrizeClaim to update.
     */
    where: Prisma.PrizeClaimWhereUniqueInput;
};
/**
 * PrizeClaim updateMany
 */
export type PrizeClaimUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PrizeClaims.
     */
    data: Prisma.XOR<Prisma.PrizeClaimUpdateManyMutationInput, Prisma.PrizeClaimUncheckedUpdateManyInput>;
    /**
     * Filter which PrizeClaims to update
     */
    where?: Prisma.PrizeClaimWhereInput;
    /**
     * Limit how many PrizeClaims to update.
     */
    limit?: number;
};
/**
 * PrizeClaim updateManyAndReturn
 */
export type PrizeClaimUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * The data used to update PrizeClaims.
     */
    data: Prisma.XOR<Prisma.PrizeClaimUpdateManyMutationInput, Prisma.PrizeClaimUncheckedUpdateManyInput>;
    /**
     * Filter which PrizeClaims to update
     */
    where?: Prisma.PrizeClaimWhereInput;
    /**
     * Limit how many PrizeClaims to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PrizeClaim upsert
 */
export type PrizeClaimUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
    /**
     * The filter to search for the PrizeClaim to update in case it exists.
     */
    where: Prisma.PrizeClaimWhereUniqueInput;
    /**
     * In case the PrizeClaim found by the `where` argument doesn't exist, create a new PrizeClaim with this data.
     */
    create: Prisma.XOR<Prisma.PrizeClaimCreateInput, Prisma.PrizeClaimUncheckedCreateInput>;
    /**
     * In case the PrizeClaim was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PrizeClaimUpdateInput, Prisma.PrizeClaimUncheckedUpdateInput>;
};
/**
 * PrizeClaim delete
 */
export type PrizeClaimDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
    /**
     * Filter which PrizeClaim to delete.
     */
    where: Prisma.PrizeClaimWhereUniqueInput;
};
/**
 * PrizeClaim deleteMany
 */
export type PrizeClaimDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PrizeClaims to delete
     */
    where?: Prisma.PrizeClaimWhereInput;
    /**
     * Limit how many PrizeClaims to delete.
     */
    limit?: number;
};
/**
 * PrizeClaim without action
 */
export type PrizeClaimDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrizeClaim
     */
    select?: Prisma.PrizeClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PrizeClaim
     */
    omit?: Prisma.PrizeClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PrizeClaimInclude<ExtArgs> | null;
};
//# sourceMappingURL=PrizeClaim.d.ts.map