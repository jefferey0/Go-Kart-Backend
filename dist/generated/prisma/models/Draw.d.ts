import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Draw
 *
 */
export type DrawModel = runtime.Types.Result.DefaultSelection<Prisma.$DrawPayload>;
export type AggregateDraw = {
    _count: DrawCountAggregateOutputType | null;
    _avg: DrawAvgAggregateOutputType | null;
    _sum: DrawSumAggregateOutputType | null;
    _min: DrawMinAggregateOutputType | null;
    _max: DrawMaxAggregateOutputType | null;
};
export type DrawAvgAggregateOutputType = {
    totalEligibleTickets: number | null;
};
export type DrawSumAggregateOutputType = {
    totalEligibleTickets: number | null;
};
export type DrawMinAggregateOutputType = {
    id: string | null;
    giveawayId: string | null;
    totalEligibleTickets: number | null;
    winningTicketId: string | null;
    algorithm: string | null;
    startedAt: Date | null;
    completedAt: Date | null;
    verificationHash: string | null;
    status: $Enums.DrawStatus | null;
};
export type DrawMaxAggregateOutputType = {
    id: string | null;
    giveawayId: string | null;
    totalEligibleTickets: number | null;
    winningTicketId: string | null;
    algorithm: string | null;
    startedAt: Date | null;
    completedAt: Date | null;
    verificationHash: string | null;
    status: $Enums.DrawStatus | null;
};
export type DrawCountAggregateOutputType = {
    id: number;
    giveawayId: number;
    totalEligibleTickets: number;
    winningTicketId: number;
    algorithm: number;
    startedAt: number;
    completedAt: number;
    verificationHash: number;
    status: number;
    _all: number;
};
export type DrawAvgAggregateInputType = {
    totalEligibleTickets?: true;
};
export type DrawSumAggregateInputType = {
    totalEligibleTickets?: true;
};
export type DrawMinAggregateInputType = {
    id?: true;
    giveawayId?: true;
    totalEligibleTickets?: true;
    winningTicketId?: true;
    algorithm?: true;
    startedAt?: true;
    completedAt?: true;
    verificationHash?: true;
    status?: true;
};
export type DrawMaxAggregateInputType = {
    id?: true;
    giveawayId?: true;
    totalEligibleTickets?: true;
    winningTicketId?: true;
    algorithm?: true;
    startedAt?: true;
    completedAt?: true;
    verificationHash?: true;
    status?: true;
};
export type DrawCountAggregateInputType = {
    id?: true;
    giveawayId?: true;
    totalEligibleTickets?: true;
    winningTicketId?: true;
    algorithm?: true;
    startedAt?: true;
    completedAt?: true;
    verificationHash?: true;
    status?: true;
    _all?: true;
};
export type DrawAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Draw to aggregate.
     */
    where?: Prisma.DrawWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Draws to fetch.
     */
    orderBy?: Prisma.DrawOrderByWithRelationInput | Prisma.DrawOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DrawWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Draws.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Draws
    **/
    _count?: true | DrawCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DrawAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DrawSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DrawMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DrawMaxAggregateInputType;
};
export type GetDrawAggregateType<T extends DrawAggregateArgs> = {
    [P in keyof T & keyof AggregateDraw]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDraw[P]> : Prisma.GetScalarType<T[P], AggregateDraw[P]>;
};
export type DrawGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DrawWhereInput;
    orderBy?: Prisma.DrawOrderByWithAggregationInput | Prisma.DrawOrderByWithAggregationInput[];
    by: Prisma.DrawScalarFieldEnum[] | Prisma.DrawScalarFieldEnum;
    having?: Prisma.DrawScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DrawCountAggregateInputType | true;
    _avg?: DrawAvgAggregateInputType;
    _sum?: DrawSumAggregateInputType;
    _min?: DrawMinAggregateInputType;
    _max?: DrawMaxAggregateInputType;
};
export type DrawGroupByOutputType = {
    id: string;
    giveawayId: string;
    totalEligibleTickets: number;
    winningTicketId: string | null;
    algorithm: string;
    startedAt: Date;
    completedAt: Date | null;
    verificationHash: string | null;
    status: $Enums.DrawStatus;
    _count: DrawCountAggregateOutputType | null;
    _avg: DrawAvgAggregateOutputType | null;
    _sum: DrawSumAggregateOutputType | null;
    _min: DrawMinAggregateOutputType | null;
    _max: DrawMaxAggregateOutputType | null;
};
export type GetDrawGroupByPayload<T extends DrawGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DrawGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DrawGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DrawGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DrawGroupByOutputType[P]>;
}>>;
export type DrawWhereInput = {
    AND?: Prisma.DrawWhereInput | Prisma.DrawWhereInput[];
    OR?: Prisma.DrawWhereInput[];
    NOT?: Prisma.DrawWhereInput | Prisma.DrawWhereInput[];
    id?: Prisma.StringFilter<"Draw"> | string;
    giveawayId?: Prisma.StringFilter<"Draw"> | string;
    totalEligibleTickets?: Prisma.IntFilter<"Draw"> | number;
    winningTicketId?: Prisma.StringNullableFilter<"Draw"> | string | null;
    algorithm?: Prisma.StringFilter<"Draw"> | string;
    startedAt?: Prisma.DateTimeFilter<"Draw"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"Draw"> | Date | string | null;
    verificationHash?: Prisma.StringNullableFilter<"Draw"> | string | null;
    status?: Prisma.EnumDrawStatusFilter<"Draw"> | $Enums.DrawStatus;
    giveaway?: Prisma.XOR<Prisma.GiveawayScalarRelationFilter, Prisma.GiveawayWhereInput>;
    winner?: Prisma.XOR<Prisma.WinnerNullableScalarRelationFilter, Prisma.WinnerWhereInput> | null;
};
export type DrawOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    totalEligibleTickets?: Prisma.SortOrder;
    winningTicketId?: Prisma.SortOrderInput | Prisma.SortOrder;
    algorithm?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    giveaway?: Prisma.GiveawayOrderByWithRelationInput;
    winner?: Prisma.WinnerOrderByWithRelationInput;
};
export type DrawWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DrawWhereInput | Prisma.DrawWhereInput[];
    OR?: Prisma.DrawWhereInput[];
    NOT?: Prisma.DrawWhereInput | Prisma.DrawWhereInput[];
    giveawayId?: Prisma.StringFilter<"Draw"> | string;
    totalEligibleTickets?: Prisma.IntFilter<"Draw"> | number;
    winningTicketId?: Prisma.StringNullableFilter<"Draw"> | string | null;
    algorithm?: Prisma.StringFilter<"Draw"> | string;
    startedAt?: Prisma.DateTimeFilter<"Draw"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"Draw"> | Date | string | null;
    verificationHash?: Prisma.StringNullableFilter<"Draw"> | string | null;
    status?: Prisma.EnumDrawStatusFilter<"Draw"> | $Enums.DrawStatus;
    giveaway?: Prisma.XOR<Prisma.GiveawayScalarRelationFilter, Prisma.GiveawayWhereInput>;
    winner?: Prisma.XOR<Prisma.WinnerNullableScalarRelationFilter, Prisma.WinnerWhereInput> | null;
}, "id">;
export type DrawOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    totalEligibleTickets?: Prisma.SortOrder;
    winningTicketId?: Prisma.SortOrderInput | Prisma.SortOrder;
    algorithm?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    verificationHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.DrawCountOrderByAggregateInput;
    _avg?: Prisma.DrawAvgOrderByAggregateInput;
    _max?: Prisma.DrawMaxOrderByAggregateInput;
    _min?: Prisma.DrawMinOrderByAggregateInput;
    _sum?: Prisma.DrawSumOrderByAggregateInput;
};
export type DrawScalarWhereWithAggregatesInput = {
    AND?: Prisma.DrawScalarWhereWithAggregatesInput | Prisma.DrawScalarWhereWithAggregatesInput[];
    OR?: Prisma.DrawScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DrawScalarWhereWithAggregatesInput | Prisma.DrawScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Draw"> | string;
    giveawayId?: Prisma.StringWithAggregatesFilter<"Draw"> | string;
    totalEligibleTickets?: Prisma.IntWithAggregatesFilter<"Draw"> | number;
    winningTicketId?: Prisma.StringNullableWithAggregatesFilter<"Draw"> | string | null;
    algorithm?: Prisma.StringWithAggregatesFilter<"Draw"> | string;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"Draw"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Draw"> | Date | string | null;
    verificationHash?: Prisma.StringNullableWithAggregatesFilter<"Draw"> | string | null;
    status?: Prisma.EnumDrawStatusWithAggregatesFilter<"Draw"> | $Enums.DrawStatus;
};
export type DrawCreateInput = {
    id?: string;
    totalEligibleTickets: number;
    winningTicketId?: string | null;
    algorithm: string;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    verificationHash?: string | null;
    status?: $Enums.DrawStatus;
    giveaway: Prisma.GiveawayCreateNestedOneWithoutDrawsInput;
    winner?: Prisma.WinnerCreateNestedOneWithoutDrawInput;
};
export type DrawUncheckedCreateInput = {
    id?: string;
    giveawayId: string;
    totalEligibleTickets: number;
    winningTicketId?: string | null;
    algorithm: string;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    verificationHash?: string | null;
    status?: $Enums.DrawStatus;
    winner?: Prisma.WinnerUncheckedCreateNestedOneWithoutDrawInput;
};
export type DrawUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEligibleTickets?: Prisma.IntFieldUpdateOperationsInput | number;
    winningTicketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    algorithm?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus;
    giveaway?: Prisma.GiveawayUpdateOneRequiredWithoutDrawsNestedInput;
    winner?: Prisma.WinnerUpdateOneWithoutDrawNestedInput;
};
export type DrawUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giveawayId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEligibleTickets?: Prisma.IntFieldUpdateOperationsInput | number;
    winningTicketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    algorithm?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus;
    winner?: Prisma.WinnerUncheckedUpdateOneWithoutDrawNestedInput;
};
export type DrawCreateManyInput = {
    id?: string;
    giveawayId: string;
    totalEligibleTickets: number;
    winningTicketId?: string | null;
    algorithm: string;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    verificationHash?: string | null;
    status?: $Enums.DrawStatus;
};
export type DrawUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEligibleTickets?: Prisma.IntFieldUpdateOperationsInput | number;
    winningTicketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    algorithm?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus;
};
export type DrawUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giveawayId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEligibleTickets?: Prisma.IntFieldUpdateOperationsInput | number;
    winningTicketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    algorithm?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus;
};
export type DrawListRelationFilter = {
    every?: Prisma.DrawWhereInput;
    some?: Prisma.DrawWhereInput;
    none?: Prisma.DrawWhereInput;
};
export type DrawOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DrawScalarRelationFilter = {
    is?: Prisma.DrawWhereInput;
    isNot?: Prisma.DrawWhereInput;
};
export type DrawCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    totalEligibleTickets?: Prisma.SortOrder;
    winningTicketId?: Prisma.SortOrder;
    algorithm?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    verificationHash?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DrawAvgOrderByAggregateInput = {
    totalEligibleTickets?: Prisma.SortOrder;
};
export type DrawMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    totalEligibleTickets?: Prisma.SortOrder;
    winningTicketId?: Prisma.SortOrder;
    algorithm?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    verificationHash?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DrawMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    giveawayId?: Prisma.SortOrder;
    totalEligibleTickets?: Prisma.SortOrder;
    winningTicketId?: Prisma.SortOrder;
    algorithm?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    verificationHash?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type DrawSumOrderByAggregateInput = {
    totalEligibleTickets?: Prisma.SortOrder;
};
export type DrawCreateNestedManyWithoutGiveawayInput = {
    create?: Prisma.XOR<Prisma.DrawCreateWithoutGiveawayInput, Prisma.DrawUncheckedCreateWithoutGiveawayInput> | Prisma.DrawCreateWithoutGiveawayInput[] | Prisma.DrawUncheckedCreateWithoutGiveawayInput[];
    connectOrCreate?: Prisma.DrawCreateOrConnectWithoutGiveawayInput | Prisma.DrawCreateOrConnectWithoutGiveawayInput[];
    createMany?: Prisma.DrawCreateManyGiveawayInputEnvelope;
    connect?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
};
export type DrawUncheckedCreateNestedManyWithoutGiveawayInput = {
    create?: Prisma.XOR<Prisma.DrawCreateWithoutGiveawayInput, Prisma.DrawUncheckedCreateWithoutGiveawayInput> | Prisma.DrawCreateWithoutGiveawayInput[] | Prisma.DrawUncheckedCreateWithoutGiveawayInput[];
    connectOrCreate?: Prisma.DrawCreateOrConnectWithoutGiveawayInput | Prisma.DrawCreateOrConnectWithoutGiveawayInput[];
    createMany?: Prisma.DrawCreateManyGiveawayInputEnvelope;
    connect?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
};
export type DrawUpdateManyWithoutGiveawayNestedInput = {
    create?: Prisma.XOR<Prisma.DrawCreateWithoutGiveawayInput, Prisma.DrawUncheckedCreateWithoutGiveawayInput> | Prisma.DrawCreateWithoutGiveawayInput[] | Prisma.DrawUncheckedCreateWithoutGiveawayInput[];
    connectOrCreate?: Prisma.DrawCreateOrConnectWithoutGiveawayInput | Prisma.DrawCreateOrConnectWithoutGiveawayInput[];
    upsert?: Prisma.DrawUpsertWithWhereUniqueWithoutGiveawayInput | Prisma.DrawUpsertWithWhereUniqueWithoutGiveawayInput[];
    createMany?: Prisma.DrawCreateManyGiveawayInputEnvelope;
    set?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
    disconnect?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
    delete?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
    connect?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
    update?: Prisma.DrawUpdateWithWhereUniqueWithoutGiveawayInput | Prisma.DrawUpdateWithWhereUniqueWithoutGiveawayInput[];
    updateMany?: Prisma.DrawUpdateManyWithWhereWithoutGiveawayInput | Prisma.DrawUpdateManyWithWhereWithoutGiveawayInput[];
    deleteMany?: Prisma.DrawScalarWhereInput | Prisma.DrawScalarWhereInput[];
};
export type DrawUncheckedUpdateManyWithoutGiveawayNestedInput = {
    create?: Prisma.XOR<Prisma.DrawCreateWithoutGiveawayInput, Prisma.DrawUncheckedCreateWithoutGiveawayInput> | Prisma.DrawCreateWithoutGiveawayInput[] | Prisma.DrawUncheckedCreateWithoutGiveawayInput[];
    connectOrCreate?: Prisma.DrawCreateOrConnectWithoutGiveawayInput | Prisma.DrawCreateOrConnectWithoutGiveawayInput[];
    upsert?: Prisma.DrawUpsertWithWhereUniqueWithoutGiveawayInput | Prisma.DrawUpsertWithWhereUniqueWithoutGiveawayInput[];
    createMany?: Prisma.DrawCreateManyGiveawayInputEnvelope;
    set?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
    disconnect?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
    delete?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
    connect?: Prisma.DrawWhereUniqueInput | Prisma.DrawWhereUniqueInput[];
    update?: Prisma.DrawUpdateWithWhereUniqueWithoutGiveawayInput | Prisma.DrawUpdateWithWhereUniqueWithoutGiveawayInput[];
    updateMany?: Prisma.DrawUpdateManyWithWhereWithoutGiveawayInput | Prisma.DrawUpdateManyWithWhereWithoutGiveawayInput[];
    deleteMany?: Prisma.DrawScalarWhereInput | Prisma.DrawScalarWhereInput[];
};
export type DrawCreateNestedOneWithoutWinnerInput = {
    create?: Prisma.XOR<Prisma.DrawCreateWithoutWinnerInput, Prisma.DrawUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: Prisma.DrawCreateOrConnectWithoutWinnerInput;
    connect?: Prisma.DrawWhereUniqueInput;
};
export type DrawUpdateOneRequiredWithoutWinnerNestedInput = {
    create?: Prisma.XOR<Prisma.DrawCreateWithoutWinnerInput, Prisma.DrawUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: Prisma.DrawCreateOrConnectWithoutWinnerInput;
    upsert?: Prisma.DrawUpsertWithoutWinnerInput;
    connect?: Prisma.DrawWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DrawUpdateToOneWithWhereWithoutWinnerInput, Prisma.DrawUpdateWithoutWinnerInput>, Prisma.DrawUncheckedUpdateWithoutWinnerInput>;
};
export type EnumDrawStatusFieldUpdateOperationsInput = {
    set?: $Enums.DrawStatus;
};
export type DrawCreateWithoutGiveawayInput = {
    id?: string;
    totalEligibleTickets: number;
    winningTicketId?: string | null;
    algorithm: string;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    verificationHash?: string | null;
    status?: $Enums.DrawStatus;
    winner?: Prisma.WinnerCreateNestedOneWithoutDrawInput;
};
export type DrawUncheckedCreateWithoutGiveawayInput = {
    id?: string;
    totalEligibleTickets: number;
    winningTicketId?: string | null;
    algorithm: string;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    verificationHash?: string | null;
    status?: $Enums.DrawStatus;
    winner?: Prisma.WinnerUncheckedCreateNestedOneWithoutDrawInput;
};
export type DrawCreateOrConnectWithoutGiveawayInput = {
    where: Prisma.DrawWhereUniqueInput;
    create: Prisma.XOR<Prisma.DrawCreateWithoutGiveawayInput, Prisma.DrawUncheckedCreateWithoutGiveawayInput>;
};
export type DrawCreateManyGiveawayInputEnvelope = {
    data: Prisma.DrawCreateManyGiveawayInput | Prisma.DrawCreateManyGiveawayInput[];
    skipDuplicates?: boolean;
};
export type DrawUpsertWithWhereUniqueWithoutGiveawayInput = {
    where: Prisma.DrawWhereUniqueInput;
    update: Prisma.XOR<Prisma.DrawUpdateWithoutGiveawayInput, Prisma.DrawUncheckedUpdateWithoutGiveawayInput>;
    create: Prisma.XOR<Prisma.DrawCreateWithoutGiveawayInput, Prisma.DrawUncheckedCreateWithoutGiveawayInput>;
};
export type DrawUpdateWithWhereUniqueWithoutGiveawayInput = {
    where: Prisma.DrawWhereUniqueInput;
    data: Prisma.XOR<Prisma.DrawUpdateWithoutGiveawayInput, Prisma.DrawUncheckedUpdateWithoutGiveawayInput>;
};
export type DrawUpdateManyWithWhereWithoutGiveawayInput = {
    where: Prisma.DrawScalarWhereInput;
    data: Prisma.XOR<Prisma.DrawUpdateManyMutationInput, Prisma.DrawUncheckedUpdateManyWithoutGiveawayInput>;
};
export type DrawScalarWhereInput = {
    AND?: Prisma.DrawScalarWhereInput | Prisma.DrawScalarWhereInput[];
    OR?: Prisma.DrawScalarWhereInput[];
    NOT?: Prisma.DrawScalarWhereInput | Prisma.DrawScalarWhereInput[];
    id?: Prisma.StringFilter<"Draw"> | string;
    giveawayId?: Prisma.StringFilter<"Draw"> | string;
    totalEligibleTickets?: Prisma.IntFilter<"Draw"> | number;
    winningTicketId?: Prisma.StringNullableFilter<"Draw"> | string | null;
    algorithm?: Prisma.StringFilter<"Draw"> | string;
    startedAt?: Prisma.DateTimeFilter<"Draw"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"Draw"> | Date | string | null;
    verificationHash?: Prisma.StringNullableFilter<"Draw"> | string | null;
    status?: Prisma.EnumDrawStatusFilter<"Draw"> | $Enums.DrawStatus;
};
export type DrawCreateWithoutWinnerInput = {
    id?: string;
    totalEligibleTickets: number;
    winningTicketId?: string | null;
    algorithm: string;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    verificationHash?: string | null;
    status?: $Enums.DrawStatus;
    giveaway: Prisma.GiveawayCreateNestedOneWithoutDrawsInput;
};
export type DrawUncheckedCreateWithoutWinnerInput = {
    id?: string;
    giveawayId: string;
    totalEligibleTickets: number;
    winningTicketId?: string | null;
    algorithm: string;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    verificationHash?: string | null;
    status?: $Enums.DrawStatus;
};
export type DrawCreateOrConnectWithoutWinnerInput = {
    where: Prisma.DrawWhereUniqueInput;
    create: Prisma.XOR<Prisma.DrawCreateWithoutWinnerInput, Prisma.DrawUncheckedCreateWithoutWinnerInput>;
};
export type DrawUpsertWithoutWinnerInput = {
    update: Prisma.XOR<Prisma.DrawUpdateWithoutWinnerInput, Prisma.DrawUncheckedUpdateWithoutWinnerInput>;
    create: Prisma.XOR<Prisma.DrawCreateWithoutWinnerInput, Prisma.DrawUncheckedCreateWithoutWinnerInput>;
    where?: Prisma.DrawWhereInput;
};
export type DrawUpdateToOneWithWhereWithoutWinnerInput = {
    where?: Prisma.DrawWhereInput;
    data: Prisma.XOR<Prisma.DrawUpdateWithoutWinnerInput, Prisma.DrawUncheckedUpdateWithoutWinnerInput>;
};
export type DrawUpdateWithoutWinnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEligibleTickets?: Prisma.IntFieldUpdateOperationsInput | number;
    winningTicketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    algorithm?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus;
    giveaway?: Prisma.GiveawayUpdateOneRequiredWithoutDrawsNestedInput;
};
export type DrawUncheckedUpdateWithoutWinnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    giveawayId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEligibleTickets?: Prisma.IntFieldUpdateOperationsInput | number;
    winningTicketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    algorithm?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus;
};
export type DrawCreateManyGiveawayInput = {
    id?: string;
    totalEligibleTickets: number;
    winningTicketId?: string | null;
    algorithm: string;
    startedAt?: Date | string;
    completedAt?: Date | string | null;
    verificationHash?: string | null;
    status?: $Enums.DrawStatus;
};
export type DrawUpdateWithoutGiveawayInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEligibleTickets?: Prisma.IntFieldUpdateOperationsInput | number;
    winningTicketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    algorithm?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus;
    winner?: Prisma.WinnerUpdateOneWithoutDrawNestedInput;
};
export type DrawUncheckedUpdateWithoutGiveawayInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEligibleTickets?: Prisma.IntFieldUpdateOperationsInput | number;
    winningTicketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    algorithm?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus;
    winner?: Prisma.WinnerUncheckedUpdateOneWithoutDrawNestedInput;
};
export type DrawUncheckedUpdateManyWithoutGiveawayInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalEligibleTickets?: Prisma.IntFieldUpdateOperationsInput | number;
    winningTicketId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    algorithm?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verificationHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus;
};
export type DrawSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    giveawayId?: boolean;
    totalEligibleTickets?: boolean;
    winningTicketId?: boolean;
    algorithm?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    verificationHash?: boolean;
    status?: boolean;
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
    winner?: boolean | Prisma.Draw$winnerArgs<ExtArgs>;
}, ExtArgs["result"]["draw"]>;
export type DrawSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    giveawayId?: boolean;
    totalEligibleTickets?: boolean;
    winningTicketId?: boolean;
    algorithm?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    verificationHash?: boolean;
    status?: boolean;
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["draw"]>;
export type DrawSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    giveawayId?: boolean;
    totalEligibleTickets?: boolean;
    winningTicketId?: boolean;
    algorithm?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    verificationHash?: boolean;
    status?: boolean;
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["draw"]>;
export type DrawSelectScalar = {
    id?: boolean;
    giveawayId?: boolean;
    totalEligibleTickets?: boolean;
    winningTicketId?: boolean;
    algorithm?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    verificationHash?: boolean;
    status?: boolean;
};
export type DrawOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "giveawayId" | "totalEligibleTickets" | "winningTicketId" | "algorithm" | "startedAt" | "completedAt" | "verificationHash" | "status", ExtArgs["result"]["draw"]>;
export type DrawInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
    winner?: boolean | Prisma.Draw$winnerArgs<ExtArgs>;
};
export type DrawIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
};
export type DrawIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    giveaway?: boolean | Prisma.GiveawayDefaultArgs<ExtArgs>;
};
export type $DrawPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Draw";
    objects: {
        giveaway: Prisma.$GiveawayPayload<ExtArgs>;
        winner: Prisma.$WinnerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        giveawayId: string;
        totalEligibleTickets: number;
        winningTicketId: string | null;
        algorithm: string;
        startedAt: Date;
        completedAt: Date | null;
        verificationHash: string | null;
        status: $Enums.DrawStatus;
    }, ExtArgs["result"]["draw"]>;
    composites: {};
};
export type DrawGetPayload<S extends boolean | null | undefined | DrawDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DrawPayload, S>;
export type DrawCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DrawFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DrawCountAggregateInputType | true;
};
export interface DrawDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Draw'];
        meta: {
            name: 'Draw';
        };
    };
    /**
     * Find zero or one Draw that matches the filter.
     * @param {DrawFindUniqueArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawFindUniqueArgs>(args: Prisma.SelectSubset<T, DrawFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DrawClient<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Draw that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawFindUniqueOrThrowArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DrawFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DrawClient<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Draw that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindFirstArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawFindFirstArgs>(args?: Prisma.SelectSubset<T, DrawFindFirstArgs<ExtArgs>>): Prisma.Prisma__DrawClient<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Draw that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindFirstOrThrowArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DrawFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DrawClient<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Draws that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Draws
     * const draws = await prisma.draw.findMany()
     *
     * // Get first 10 Draws
     * const draws = await prisma.draw.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const drawWithIdOnly = await prisma.draw.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DrawFindManyArgs>(args?: Prisma.SelectSubset<T, DrawFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Draw.
     * @param {DrawCreateArgs} args - Arguments to create a Draw.
     * @example
     * // Create one Draw
     * const Draw = await prisma.draw.create({
     *   data: {
     *     // ... data to create a Draw
     *   }
     * })
     *
     */
    create<T extends DrawCreateArgs>(args: Prisma.SelectSubset<T, DrawCreateArgs<ExtArgs>>): Prisma.Prisma__DrawClient<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Draws.
     * @param {DrawCreateManyArgs} args - Arguments to create many Draws.
     * @example
     * // Create many Draws
     * const draw = await prisma.draw.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DrawCreateManyArgs>(args?: Prisma.SelectSubset<T, DrawCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Draws and returns the data saved in the database.
     * @param {DrawCreateManyAndReturnArgs} args - Arguments to create many Draws.
     * @example
     * // Create many Draws
     * const draw = await prisma.draw.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Draws and only return the `id`
     * const drawWithIdOnly = await prisma.draw.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DrawCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DrawCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Draw.
     * @param {DrawDeleteArgs} args - Arguments to delete one Draw.
     * @example
     * // Delete one Draw
     * const Draw = await prisma.draw.delete({
     *   where: {
     *     // ... filter to delete one Draw
     *   }
     * })
     *
     */
    delete<T extends DrawDeleteArgs>(args: Prisma.SelectSubset<T, DrawDeleteArgs<ExtArgs>>): Prisma.Prisma__DrawClient<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Draw.
     * @param {DrawUpdateArgs} args - Arguments to update one Draw.
     * @example
     * // Update one Draw
     * const draw = await prisma.draw.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DrawUpdateArgs>(args: Prisma.SelectSubset<T, DrawUpdateArgs<ExtArgs>>): Prisma.Prisma__DrawClient<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Draws.
     * @param {DrawDeleteManyArgs} args - Arguments to filter Draws to delete.
     * @example
     * // Delete a few Draws
     * const { count } = await prisma.draw.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DrawDeleteManyArgs>(args?: Prisma.SelectSubset<T, DrawDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Draws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Draws
     * const draw = await prisma.draw.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DrawUpdateManyArgs>(args: Prisma.SelectSubset<T, DrawUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Draws and returns the data updated in the database.
     * @param {DrawUpdateManyAndReturnArgs} args - Arguments to update many Draws.
     * @example
     * // Update many Draws
     * const draw = await prisma.draw.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Draws and only return the `id`
     * const drawWithIdOnly = await prisma.draw.updateManyAndReturn({
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
    updateManyAndReturn<T extends DrawUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DrawUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Draw.
     * @param {DrawUpsertArgs} args - Arguments to update or create a Draw.
     * @example
     * // Update or create a Draw
     * const draw = await prisma.draw.upsert({
     *   create: {
     *     // ... data to create a Draw
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Draw we want to update
     *   }
     * })
     */
    upsert<T extends DrawUpsertArgs>(args: Prisma.SelectSubset<T, DrawUpsertArgs<ExtArgs>>): Prisma.Prisma__DrawClient<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Draws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawCountArgs} args - Arguments to filter Draws to count.
     * @example
     * // Count the number of Draws
     * const count = await prisma.draw.count({
     *   where: {
     *     // ... the filter for the Draws we want to count
     *   }
     * })
    **/
    count<T extends DrawCountArgs>(args?: Prisma.Subset<T, DrawCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DrawCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Draw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrawAggregateArgs>(args: Prisma.Subset<T, DrawAggregateArgs>): Prisma.PrismaPromise<GetDrawAggregateType<T>>;
    /**
     * Group by Draw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DrawGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DrawGroupByArgs['orderBy'];
    } : {
        orderBy?: DrawGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DrawGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Draw model
     */
    readonly fields: DrawFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Draw.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DrawClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    giveaway<T extends Prisma.GiveawayDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GiveawayDefaultArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    winner<T extends Prisma.Draw$winnerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Draw$winnerArgs<ExtArgs>>): Prisma.Prisma__WinnerClient<runtime.Types.Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Draw model
 */
export interface DrawFieldRefs {
    readonly id: Prisma.FieldRef<"Draw", 'String'>;
    readonly giveawayId: Prisma.FieldRef<"Draw", 'String'>;
    readonly totalEligibleTickets: Prisma.FieldRef<"Draw", 'Int'>;
    readonly winningTicketId: Prisma.FieldRef<"Draw", 'String'>;
    readonly algorithm: Prisma.FieldRef<"Draw", 'String'>;
    readonly startedAt: Prisma.FieldRef<"Draw", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"Draw", 'DateTime'>;
    readonly verificationHash: Prisma.FieldRef<"Draw", 'String'>;
    readonly status: Prisma.FieldRef<"Draw", 'DrawStatus'>;
}
/**
 * Draw findUnique
 */
export type DrawFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
    /**
     * Filter, which Draw to fetch.
     */
    where: Prisma.DrawWhereUniqueInput;
};
/**
 * Draw findUniqueOrThrow
 */
export type DrawFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
    /**
     * Filter, which Draw to fetch.
     */
    where: Prisma.DrawWhereUniqueInput;
};
/**
 * Draw findFirst
 */
export type DrawFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
    /**
     * Filter, which Draw to fetch.
     */
    where?: Prisma.DrawWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Draws to fetch.
     */
    orderBy?: Prisma.DrawOrderByWithRelationInput | Prisma.DrawOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Draws.
     */
    cursor?: Prisma.DrawWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Draws.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Draws.
     */
    distinct?: Prisma.DrawScalarFieldEnum | Prisma.DrawScalarFieldEnum[];
};
/**
 * Draw findFirstOrThrow
 */
export type DrawFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
    /**
     * Filter, which Draw to fetch.
     */
    where?: Prisma.DrawWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Draws to fetch.
     */
    orderBy?: Prisma.DrawOrderByWithRelationInput | Prisma.DrawOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Draws.
     */
    cursor?: Prisma.DrawWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Draws.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Draws.
     */
    distinct?: Prisma.DrawScalarFieldEnum | Prisma.DrawScalarFieldEnum[];
};
/**
 * Draw findMany
 */
export type DrawFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
    /**
     * Filter, which Draws to fetch.
     */
    where?: Prisma.DrawWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Draws to fetch.
     */
    orderBy?: Prisma.DrawOrderByWithRelationInput | Prisma.DrawOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Draws.
     */
    cursor?: Prisma.DrawWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Draws.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Draws.
     */
    distinct?: Prisma.DrawScalarFieldEnum | Prisma.DrawScalarFieldEnum[];
};
/**
 * Draw create
 */
export type DrawCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
    /**
     * The data needed to create a Draw.
     */
    data: Prisma.XOR<Prisma.DrawCreateInput, Prisma.DrawUncheckedCreateInput>;
};
/**
 * Draw createMany
 */
export type DrawCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Draws.
     */
    data: Prisma.DrawCreateManyInput | Prisma.DrawCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Draw createManyAndReturn
 */
export type DrawCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * The data used to create many Draws.
     */
    data: Prisma.DrawCreateManyInput | Prisma.DrawCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Draw update
 */
export type DrawUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
    /**
     * The data needed to update a Draw.
     */
    data: Prisma.XOR<Prisma.DrawUpdateInput, Prisma.DrawUncheckedUpdateInput>;
    /**
     * Choose, which Draw to update.
     */
    where: Prisma.DrawWhereUniqueInput;
};
/**
 * Draw updateMany
 */
export type DrawUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Draws.
     */
    data: Prisma.XOR<Prisma.DrawUpdateManyMutationInput, Prisma.DrawUncheckedUpdateManyInput>;
    /**
     * Filter which Draws to update
     */
    where?: Prisma.DrawWhereInput;
    /**
     * Limit how many Draws to update.
     */
    limit?: number;
};
/**
 * Draw updateManyAndReturn
 */
export type DrawUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * The data used to update Draws.
     */
    data: Prisma.XOR<Prisma.DrawUpdateManyMutationInput, Prisma.DrawUncheckedUpdateManyInput>;
    /**
     * Filter which Draws to update
     */
    where?: Prisma.DrawWhereInput;
    /**
     * Limit how many Draws to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Draw upsert
 */
export type DrawUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
    /**
     * The filter to search for the Draw to update in case it exists.
     */
    where: Prisma.DrawWhereUniqueInput;
    /**
     * In case the Draw found by the `where` argument doesn't exist, create a new Draw with this data.
     */
    create: Prisma.XOR<Prisma.DrawCreateInput, Prisma.DrawUncheckedCreateInput>;
    /**
     * In case the Draw was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DrawUpdateInput, Prisma.DrawUncheckedUpdateInput>;
};
/**
 * Draw delete
 */
export type DrawDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
    /**
     * Filter which Draw to delete.
     */
    where: Prisma.DrawWhereUniqueInput;
};
/**
 * Draw deleteMany
 */
export type DrawDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Draws to delete
     */
    where?: Prisma.DrawWhereInput;
    /**
     * Limit how many Draws to delete.
     */
    limit?: number;
};
/**
 * Draw.winner
 */
export type Draw$winnerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: Prisma.WinnerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Winner
     */
    omit?: Prisma.WinnerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WinnerInclude<ExtArgs> | null;
    where?: Prisma.WinnerWhereInput;
};
/**
 * Draw without action
 */
export type DrawDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: Prisma.DrawSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Draw
     */
    omit?: Prisma.DrawOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DrawInclude<ExtArgs> | null;
};
//# sourceMappingURL=Draw.d.ts.map