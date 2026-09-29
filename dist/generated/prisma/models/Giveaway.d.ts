import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Giveaway
 *
 */
export type GiveawayModel = runtime.Types.Result.DefaultSelection<Prisma.$GiveawayPayload>;
export type AggregateGiveaway = {
    _count: GiveawayCountAggregateOutputType | null;
    _avg: GiveawayAvgAggregateOutputType | null;
    _sum: GiveawaySumAggregateOutputType | null;
    _min: GiveawayMinAggregateOutputType | null;
    _max: GiveawayMaxAggregateOutputType | null;
};
export type GiveawayAvgAggregateOutputType = {
    entryPrice: runtime.Decimal | null;
    maximumEntries: number | null;
    entriesSold: number | null;
    maximumEntriesPerUser: number | null;
    minimumEntriesPerPurchase: number | null;
};
export type GiveawaySumAggregateOutputType = {
    entryPrice: runtime.Decimal | null;
    maximumEntries: number | null;
    entriesSold: number | null;
    maximumEntriesPerUser: number | null;
    minimumEntriesPerPurchase: number | null;
};
export type GiveawayMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    shortDescription: string | null;
    description: string | null;
    status: $Enums.GiveawayStatus | null;
    entryPrice: runtime.Decimal | null;
    currency: string | null;
    maximumEntries: number | null;
    entriesSold: number | null;
    maximumEntriesPerUser: number | null;
    minimumEntriesPerPurchase: number | null;
    startDate: Date | null;
    endDate: Date | null;
    featured: boolean | null;
    categoryId: string | null;
    createdBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GiveawayMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    shortDescription: string | null;
    description: string | null;
    status: $Enums.GiveawayStatus | null;
    entryPrice: runtime.Decimal | null;
    currency: string | null;
    maximumEntries: number | null;
    entriesSold: number | null;
    maximumEntriesPerUser: number | null;
    minimumEntriesPerPurchase: number | null;
    startDate: Date | null;
    endDate: Date | null;
    featured: boolean | null;
    categoryId: string | null;
    createdBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GiveawayCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    shortDescription: number;
    description: number;
    status: number;
    entryPrice: number;
    currency: number;
    maximumEntries: number;
    entriesSold: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase: number;
    startDate: number;
    endDate: number;
    featured: number;
    categoryId: number;
    createdBy: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GiveawayAvgAggregateInputType = {
    entryPrice?: true;
    maximumEntries?: true;
    entriesSold?: true;
    maximumEntriesPerUser?: true;
    minimumEntriesPerPurchase?: true;
};
export type GiveawaySumAggregateInputType = {
    entryPrice?: true;
    maximumEntries?: true;
    entriesSold?: true;
    maximumEntriesPerUser?: true;
    minimumEntriesPerPurchase?: true;
};
export type GiveawayMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    shortDescription?: true;
    description?: true;
    status?: true;
    entryPrice?: true;
    currency?: true;
    maximumEntries?: true;
    entriesSold?: true;
    maximumEntriesPerUser?: true;
    minimumEntriesPerPurchase?: true;
    startDate?: true;
    endDate?: true;
    featured?: true;
    categoryId?: true;
    createdBy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GiveawayMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    shortDescription?: true;
    description?: true;
    status?: true;
    entryPrice?: true;
    currency?: true;
    maximumEntries?: true;
    entriesSold?: true;
    maximumEntriesPerUser?: true;
    minimumEntriesPerPurchase?: true;
    startDate?: true;
    endDate?: true;
    featured?: true;
    categoryId?: true;
    createdBy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GiveawayCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    shortDescription?: true;
    description?: true;
    status?: true;
    entryPrice?: true;
    currency?: true;
    maximumEntries?: true;
    entriesSold?: true;
    maximumEntriesPerUser?: true;
    minimumEntriesPerPurchase?: true;
    startDate?: true;
    endDate?: true;
    featured?: true;
    categoryId?: true;
    createdBy?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GiveawayAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Giveaway to aggregate.
     */
    where?: Prisma.GiveawayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Giveaways to fetch.
     */
    orderBy?: Prisma.GiveawayOrderByWithRelationInput | Prisma.GiveawayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.GiveawayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Giveaways from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Giveaways.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Giveaways
    **/
    _count?: true | GiveawayCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: GiveawayAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: GiveawaySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GiveawayMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GiveawayMaxAggregateInputType;
};
export type GetGiveawayAggregateType<T extends GiveawayAggregateArgs> = {
    [P in keyof T & keyof AggregateGiveaway]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGiveaway[P]> : Prisma.GetScalarType<T[P], AggregateGiveaway[P]>;
};
export type GiveawayGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GiveawayWhereInput;
    orderBy?: Prisma.GiveawayOrderByWithAggregationInput | Prisma.GiveawayOrderByWithAggregationInput[];
    by: Prisma.GiveawayScalarFieldEnum[] | Prisma.GiveawayScalarFieldEnum;
    having?: Prisma.GiveawayScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GiveawayCountAggregateInputType | true;
    _avg?: GiveawayAvgAggregateInputType;
    _sum?: GiveawaySumAggregateInputType;
    _min?: GiveawayMinAggregateInputType;
    _max?: GiveawayMaxAggregateInputType;
};
export type GiveawayGroupByOutputType = {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal;
    currency: string;
    maximumEntries: number;
    entriesSold: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase: number;
    startDate: Date;
    endDate: Date;
    featured: boolean;
    categoryId: string | null;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    _count: GiveawayCountAggregateOutputType | null;
    _avg: GiveawayAvgAggregateOutputType | null;
    _sum: GiveawaySumAggregateOutputType | null;
    _min: GiveawayMinAggregateOutputType | null;
    _max: GiveawayMaxAggregateOutputType | null;
};
export type GetGiveawayGroupByPayload<T extends GiveawayGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GiveawayGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GiveawayGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GiveawayGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GiveawayGroupByOutputType[P]>;
}>>;
export type GiveawayWhereInput = {
    AND?: Prisma.GiveawayWhereInput | Prisma.GiveawayWhereInput[];
    OR?: Prisma.GiveawayWhereInput[];
    NOT?: Prisma.GiveawayWhereInput | Prisma.GiveawayWhereInput[];
    id?: Prisma.StringFilter<"Giveaway"> | string;
    title?: Prisma.StringFilter<"Giveaway"> | string;
    slug?: Prisma.StringFilter<"Giveaway"> | string;
    shortDescription?: Prisma.StringFilter<"Giveaway"> | string;
    description?: Prisma.StringFilter<"Giveaway"> | string;
    status?: Prisma.EnumGiveawayStatusFilter<"Giveaway"> | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFilter<"Giveaway"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Giveaway"> | string;
    maximumEntries?: Prisma.IntFilter<"Giveaway"> | number;
    entriesSold?: Prisma.IntFilter<"Giveaway"> | number;
    maximumEntriesPerUser?: Prisma.IntFilter<"Giveaway"> | number;
    minimumEntriesPerPurchase?: Prisma.IntFilter<"Giveaway"> | number;
    startDate?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    featured?: Prisma.BoolFilter<"Giveaway"> | boolean;
    categoryId?: Prisma.StringNullableFilter<"Giveaway"> | string | null;
    createdBy?: Prisma.StringFilter<"Giveaway"> | string;
    createdAt?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    prize?: Prisma.XOR<Prisma.PrizeNullableScalarRelationFilter, Prisma.PrizeWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
    tickets?: Prisma.TicketListRelationFilter;
    winner?: Prisma.XOR<Prisma.WinnerNullableScalarRelationFilter, Prisma.WinnerWhereInput> | null;
    draws?: Prisma.DrawListRelationFilter;
};
export type GiveawayOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entryPrice?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    maximumEntries?: Prisma.SortOrder;
    entriesSold?: Prisma.SortOrder;
    maximumEntriesPerUser?: Prisma.SortOrder;
    minimumEntriesPerPurchase?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    creator?: Prisma.UserOrderByWithRelationInput;
    prize?: Prisma.PrizeOrderByWithRelationInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    tickets?: Prisma.TicketOrderByRelationAggregateInput;
    winner?: Prisma.WinnerOrderByWithRelationInput;
    draws?: Prisma.DrawOrderByRelationAggregateInput;
};
export type GiveawayWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.GiveawayWhereInput | Prisma.GiveawayWhereInput[];
    OR?: Prisma.GiveawayWhereInput[];
    NOT?: Prisma.GiveawayWhereInput | Prisma.GiveawayWhereInput[];
    title?: Prisma.StringFilter<"Giveaway"> | string;
    shortDescription?: Prisma.StringFilter<"Giveaway"> | string;
    description?: Prisma.StringFilter<"Giveaway"> | string;
    status?: Prisma.EnumGiveawayStatusFilter<"Giveaway"> | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFilter<"Giveaway"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Giveaway"> | string;
    maximumEntries?: Prisma.IntFilter<"Giveaway"> | number;
    entriesSold?: Prisma.IntFilter<"Giveaway"> | number;
    maximumEntriesPerUser?: Prisma.IntFilter<"Giveaway"> | number;
    minimumEntriesPerPurchase?: Prisma.IntFilter<"Giveaway"> | number;
    startDate?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    featured?: Prisma.BoolFilter<"Giveaway"> | boolean;
    categoryId?: Prisma.StringNullableFilter<"Giveaway"> | string | null;
    createdBy?: Prisma.StringFilter<"Giveaway"> | string;
    createdAt?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    prize?: Prisma.XOR<Prisma.PrizeNullableScalarRelationFilter, Prisma.PrizeWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
    tickets?: Prisma.TicketListRelationFilter;
    winner?: Prisma.XOR<Prisma.WinnerNullableScalarRelationFilter, Prisma.WinnerWhereInput> | null;
    draws?: Prisma.DrawListRelationFilter;
}, "id" | "slug">;
export type GiveawayOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entryPrice?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    maximumEntries?: Prisma.SortOrder;
    entriesSold?: Prisma.SortOrder;
    maximumEntriesPerUser?: Prisma.SortOrder;
    minimumEntriesPerPurchase?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GiveawayCountOrderByAggregateInput;
    _avg?: Prisma.GiveawayAvgOrderByAggregateInput;
    _max?: Prisma.GiveawayMaxOrderByAggregateInput;
    _min?: Prisma.GiveawayMinOrderByAggregateInput;
    _sum?: Prisma.GiveawaySumOrderByAggregateInput;
};
export type GiveawayScalarWhereWithAggregatesInput = {
    AND?: Prisma.GiveawayScalarWhereWithAggregatesInput | Prisma.GiveawayScalarWhereWithAggregatesInput[];
    OR?: Prisma.GiveawayScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GiveawayScalarWhereWithAggregatesInput | Prisma.GiveawayScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Giveaway"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Giveaway"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Giveaway"> | string;
    shortDescription?: Prisma.StringWithAggregatesFilter<"Giveaway"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Giveaway"> | string;
    status?: Prisma.EnumGiveawayStatusWithAggregatesFilter<"Giveaway"> | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalWithAggregatesFilter<"Giveaway"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"Giveaway"> | string;
    maximumEntries?: Prisma.IntWithAggregatesFilter<"Giveaway"> | number;
    entriesSold?: Prisma.IntWithAggregatesFilter<"Giveaway"> | number;
    maximumEntriesPerUser?: Prisma.IntWithAggregatesFilter<"Giveaway"> | number;
    minimumEntriesPerPurchase?: Prisma.IntWithAggregatesFilter<"Giveaway"> | number;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Giveaway"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"Giveaway"> | Date | string;
    featured?: Prisma.BoolWithAggregatesFilter<"Giveaway"> | boolean;
    categoryId?: Prisma.StringNullableWithAggregatesFilter<"Giveaway"> | string | null;
    createdBy?: Prisma.StringWithAggregatesFilter<"Giveaway"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Giveaway"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Giveaway"> | Date | string;
};
export type GiveawayCreateInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutGiveawaysInput;
    creator: Prisma.UserCreateNestedOneWithoutGiveawaysInput;
    prize?: Prisma.PrizeCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayUncheckedCreateInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    categoryId?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prize?: Prisma.PrizeUncheckedCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerUncheckedCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawUncheckedCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutGiveawaysNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutGiveawaysNestedInput;
    prize?: Prisma.PrizeUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prize?: Prisma.PrizeUncheckedUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUncheckedUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUncheckedUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayCreateManyInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    categoryId?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GiveawayUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiveawayUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiveawayListRelationFilter = {
    every?: Prisma.GiveawayWhereInput;
    some?: Prisma.GiveawayWhereInput;
    none?: Prisma.GiveawayWhereInput;
};
export type GiveawayOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GiveawayCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entryPrice?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    maximumEntries?: Prisma.SortOrder;
    entriesSold?: Prisma.SortOrder;
    maximumEntriesPerUser?: Prisma.SortOrder;
    minimumEntriesPerPurchase?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GiveawayAvgOrderByAggregateInput = {
    entryPrice?: Prisma.SortOrder;
    maximumEntries?: Prisma.SortOrder;
    entriesSold?: Prisma.SortOrder;
    maximumEntriesPerUser?: Prisma.SortOrder;
    minimumEntriesPerPurchase?: Prisma.SortOrder;
};
export type GiveawayMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entryPrice?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    maximumEntries?: Prisma.SortOrder;
    entriesSold?: Prisma.SortOrder;
    maximumEntriesPerUser?: Prisma.SortOrder;
    minimumEntriesPerPurchase?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GiveawayMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entryPrice?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    maximumEntries?: Prisma.SortOrder;
    entriesSold?: Prisma.SortOrder;
    maximumEntriesPerUser?: Prisma.SortOrder;
    minimumEntriesPerPurchase?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GiveawaySumOrderByAggregateInput = {
    entryPrice?: Prisma.SortOrder;
    maximumEntries?: Prisma.SortOrder;
    entriesSold?: Prisma.SortOrder;
    maximumEntriesPerUser?: Prisma.SortOrder;
    minimumEntriesPerPurchase?: Prisma.SortOrder;
};
export type GiveawayScalarRelationFilter = {
    is?: Prisma.GiveawayWhereInput;
    isNot?: Prisma.GiveawayWhereInput;
};
export type GiveawayCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutCreatorInput, Prisma.GiveawayUncheckedCreateWithoutCreatorInput> | Prisma.GiveawayCreateWithoutCreatorInput[] | Prisma.GiveawayUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutCreatorInput | Prisma.GiveawayCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.GiveawayCreateManyCreatorInputEnvelope;
    connect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
};
export type GiveawayUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutCreatorInput, Prisma.GiveawayUncheckedCreateWithoutCreatorInput> | Prisma.GiveawayCreateWithoutCreatorInput[] | Prisma.GiveawayUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutCreatorInput | Prisma.GiveawayCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.GiveawayCreateManyCreatorInputEnvelope;
    connect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
};
export type GiveawayUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutCreatorInput, Prisma.GiveawayUncheckedCreateWithoutCreatorInput> | Prisma.GiveawayCreateWithoutCreatorInput[] | Prisma.GiveawayUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutCreatorInput | Prisma.GiveawayCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.GiveawayUpsertWithWhereUniqueWithoutCreatorInput | Prisma.GiveawayUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.GiveawayCreateManyCreatorInputEnvelope;
    set?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    disconnect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    delete?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    connect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    update?: Prisma.GiveawayUpdateWithWhereUniqueWithoutCreatorInput | Prisma.GiveawayUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.GiveawayUpdateManyWithWhereWithoutCreatorInput | Prisma.GiveawayUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.GiveawayScalarWhereInput | Prisma.GiveawayScalarWhereInput[];
};
export type GiveawayUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutCreatorInput, Prisma.GiveawayUncheckedCreateWithoutCreatorInput> | Prisma.GiveawayCreateWithoutCreatorInput[] | Prisma.GiveawayUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutCreatorInput | Prisma.GiveawayCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.GiveawayUpsertWithWhereUniqueWithoutCreatorInput | Prisma.GiveawayUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.GiveawayCreateManyCreatorInputEnvelope;
    set?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    disconnect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    delete?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    connect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    update?: Prisma.GiveawayUpdateWithWhereUniqueWithoutCreatorInput | Prisma.GiveawayUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.GiveawayUpdateManyWithWhereWithoutCreatorInput | Prisma.GiveawayUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.GiveawayScalarWhereInput | Prisma.GiveawayScalarWhereInput[];
};
export type GiveawayCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutCategoryInput, Prisma.GiveawayUncheckedCreateWithoutCategoryInput> | Prisma.GiveawayCreateWithoutCategoryInput[] | Prisma.GiveawayUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutCategoryInput | Prisma.GiveawayCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.GiveawayCreateManyCategoryInputEnvelope;
    connect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
};
export type GiveawayUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutCategoryInput, Prisma.GiveawayUncheckedCreateWithoutCategoryInput> | Prisma.GiveawayCreateWithoutCategoryInput[] | Prisma.GiveawayUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutCategoryInput | Prisma.GiveawayCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.GiveawayCreateManyCategoryInputEnvelope;
    connect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
};
export type GiveawayUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutCategoryInput, Prisma.GiveawayUncheckedCreateWithoutCategoryInput> | Prisma.GiveawayCreateWithoutCategoryInput[] | Prisma.GiveawayUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutCategoryInput | Prisma.GiveawayCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.GiveawayUpsertWithWhereUniqueWithoutCategoryInput | Prisma.GiveawayUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.GiveawayCreateManyCategoryInputEnvelope;
    set?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    disconnect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    delete?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    connect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    update?: Prisma.GiveawayUpdateWithWhereUniqueWithoutCategoryInput | Prisma.GiveawayUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.GiveawayUpdateManyWithWhereWithoutCategoryInput | Prisma.GiveawayUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.GiveawayScalarWhereInput | Prisma.GiveawayScalarWhereInput[];
};
export type GiveawayUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutCategoryInput, Prisma.GiveawayUncheckedCreateWithoutCategoryInput> | Prisma.GiveawayCreateWithoutCategoryInput[] | Prisma.GiveawayUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutCategoryInput | Prisma.GiveawayCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.GiveawayUpsertWithWhereUniqueWithoutCategoryInput | Prisma.GiveawayUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.GiveawayCreateManyCategoryInputEnvelope;
    set?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    disconnect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    delete?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    connect?: Prisma.GiveawayWhereUniqueInput | Prisma.GiveawayWhereUniqueInput[];
    update?: Prisma.GiveawayUpdateWithWhereUniqueWithoutCategoryInput | Prisma.GiveawayUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.GiveawayUpdateManyWithWhereWithoutCategoryInput | Prisma.GiveawayUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.GiveawayScalarWhereInput | Prisma.GiveawayScalarWhereInput[];
};
export type EnumGiveawayStatusFieldUpdateOperationsInput = {
    set?: $Enums.GiveawayStatus;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type GiveawayCreateNestedOneWithoutPrizeInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutPrizeInput, Prisma.GiveawayUncheckedCreateWithoutPrizeInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutPrizeInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
};
export type GiveawayUpdateOneRequiredWithoutPrizeNestedInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutPrizeInput, Prisma.GiveawayUncheckedCreateWithoutPrizeInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutPrizeInput;
    upsert?: Prisma.GiveawayUpsertWithoutPrizeInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GiveawayUpdateToOneWithWhereWithoutPrizeInput, Prisma.GiveawayUpdateWithoutPrizeInput>, Prisma.GiveawayUncheckedUpdateWithoutPrizeInput>;
};
export type GiveawayCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutOrdersInput, Prisma.GiveawayUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
};
export type GiveawayUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutOrdersInput, Prisma.GiveawayUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.GiveawayUpsertWithoutOrdersInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GiveawayUpdateToOneWithWhereWithoutOrdersInput, Prisma.GiveawayUpdateWithoutOrdersInput>, Prisma.GiveawayUncheckedUpdateWithoutOrdersInput>;
};
export type GiveawayCreateNestedOneWithoutTicketsInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutTicketsInput, Prisma.GiveawayUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutTicketsInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
};
export type GiveawayUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutTicketsInput, Prisma.GiveawayUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutTicketsInput;
    upsert?: Prisma.GiveawayUpsertWithoutTicketsInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GiveawayUpdateToOneWithWhereWithoutTicketsInput, Prisma.GiveawayUpdateWithoutTicketsInput>, Prisma.GiveawayUncheckedUpdateWithoutTicketsInput>;
};
export type GiveawayCreateNestedOneWithoutWinnerInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutWinnerInput, Prisma.GiveawayUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutWinnerInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
};
export type GiveawayUpdateOneRequiredWithoutWinnerNestedInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutWinnerInput, Prisma.GiveawayUncheckedCreateWithoutWinnerInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutWinnerInput;
    upsert?: Prisma.GiveawayUpsertWithoutWinnerInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GiveawayUpdateToOneWithWhereWithoutWinnerInput, Prisma.GiveawayUpdateWithoutWinnerInput>, Prisma.GiveawayUncheckedUpdateWithoutWinnerInput>;
};
export type GiveawayCreateNestedOneWithoutDrawsInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutDrawsInput, Prisma.GiveawayUncheckedCreateWithoutDrawsInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutDrawsInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
};
export type GiveawayUpdateOneRequiredWithoutDrawsNestedInput = {
    create?: Prisma.XOR<Prisma.GiveawayCreateWithoutDrawsInput, Prisma.GiveawayUncheckedCreateWithoutDrawsInput>;
    connectOrCreate?: Prisma.GiveawayCreateOrConnectWithoutDrawsInput;
    upsert?: Prisma.GiveawayUpsertWithoutDrawsInput;
    connect?: Prisma.GiveawayWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GiveawayUpdateToOneWithWhereWithoutDrawsInput, Prisma.GiveawayUpdateWithoutDrawsInput>, Prisma.GiveawayUncheckedUpdateWithoutDrawsInput>;
};
export type GiveawayCreateWithoutCreatorInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutGiveawaysInput;
    prize?: Prisma.PrizeCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayUncheckedCreateWithoutCreatorInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prize?: Prisma.PrizeUncheckedCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerUncheckedCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawUncheckedCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayCreateOrConnectWithoutCreatorInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutCreatorInput, Prisma.GiveawayUncheckedCreateWithoutCreatorInput>;
};
export type GiveawayCreateManyCreatorInputEnvelope = {
    data: Prisma.GiveawayCreateManyCreatorInput | Prisma.GiveawayCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type GiveawayUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    update: Prisma.XOR<Prisma.GiveawayUpdateWithoutCreatorInput, Prisma.GiveawayUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutCreatorInput, Prisma.GiveawayUncheckedCreateWithoutCreatorInput>;
};
export type GiveawayUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    data: Prisma.XOR<Prisma.GiveawayUpdateWithoutCreatorInput, Prisma.GiveawayUncheckedUpdateWithoutCreatorInput>;
};
export type GiveawayUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.GiveawayScalarWhereInput;
    data: Prisma.XOR<Prisma.GiveawayUpdateManyMutationInput, Prisma.GiveawayUncheckedUpdateManyWithoutCreatorInput>;
};
export type GiveawayScalarWhereInput = {
    AND?: Prisma.GiveawayScalarWhereInput | Prisma.GiveawayScalarWhereInput[];
    OR?: Prisma.GiveawayScalarWhereInput[];
    NOT?: Prisma.GiveawayScalarWhereInput | Prisma.GiveawayScalarWhereInput[];
    id?: Prisma.StringFilter<"Giveaway"> | string;
    title?: Prisma.StringFilter<"Giveaway"> | string;
    slug?: Prisma.StringFilter<"Giveaway"> | string;
    shortDescription?: Prisma.StringFilter<"Giveaway"> | string;
    description?: Prisma.StringFilter<"Giveaway"> | string;
    status?: Prisma.EnumGiveawayStatusFilter<"Giveaway"> | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFilter<"Giveaway"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Giveaway"> | string;
    maximumEntries?: Prisma.IntFilter<"Giveaway"> | number;
    entriesSold?: Prisma.IntFilter<"Giveaway"> | number;
    maximumEntriesPerUser?: Prisma.IntFilter<"Giveaway"> | number;
    minimumEntriesPerPurchase?: Prisma.IntFilter<"Giveaway"> | number;
    startDate?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    featured?: Prisma.BoolFilter<"Giveaway"> | boolean;
    categoryId?: Prisma.StringNullableFilter<"Giveaway"> | string | null;
    createdBy?: Prisma.StringFilter<"Giveaway"> | string;
    createdAt?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Giveaway"> | Date | string;
};
export type GiveawayCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutGiveawaysInput;
    prize?: Prisma.PrizeCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayUncheckedCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prize?: Prisma.PrizeUncheckedCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerUncheckedCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawUncheckedCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayCreateOrConnectWithoutCategoryInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutCategoryInput, Prisma.GiveawayUncheckedCreateWithoutCategoryInput>;
};
export type GiveawayCreateManyCategoryInputEnvelope = {
    data: Prisma.GiveawayCreateManyCategoryInput | Prisma.GiveawayCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type GiveawayUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    update: Prisma.XOR<Prisma.GiveawayUpdateWithoutCategoryInput, Prisma.GiveawayUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutCategoryInput, Prisma.GiveawayUncheckedCreateWithoutCategoryInput>;
};
export type GiveawayUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    data: Prisma.XOR<Prisma.GiveawayUpdateWithoutCategoryInput, Prisma.GiveawayUncheckedUpdateWithoutCategoryInput>;
};
export type GiveawayUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.GiveawayScalarWhereInput;
    data: Prisma.XOR<Prisma.GiveawayUpdateManyMutationInput, Prisma.GiveawayUncheckedUpdateManyWithoutCategoryInput>;
};
export type GiveawayCreateWithoutPrizeInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutGiveawaysInput;
    creator: Prisma.UserCreateNestedOneWithoutGiveawaysInput;
    orders?: Prisma.OrderCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayUncheckedCreateWithoutPrizeInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    categoryId?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerUncheckedCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawUncheckedCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayCreateOrConnectWithoutPrizeInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutPrizeInput, Prisma.GiveawayUncheckedCreateWithoutPrizeInput>;
};
export type GiveawayUpsertWithoutPrizeInput = {
    update: Prisma.XOR<Prisma.GiveawayUpdateWithoutPrizeInput, Prisma.GiveawayUncheckedUpdateWithoutPrizeInput>;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutPrizeInput, Prisma.GiveawayUncheckedCreateWithoutPrizeInput>;
    where?: Prisma.GiveawayWhereInput;
};
export type GiveawayUpdateToOneWithWhereWithoutPrizeInput = {
    where?: Prisma.GiveawayWhereInput;
    data: Prisma.XOR<Prisma.GiveawayUpdateWithoutPrizeInput, Prisma.GiveawayUncheckedUpdateWithoutPrizeInput>;
};
export type GiveawayUpdateWithoutPrizeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutGiveawaysNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutGiveawaysNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateWithoutPrizeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUncheckedUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUncheckedUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayCreateWithoutOrdersInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutGiveawaysInput;
    creator: Prisma.UserCreateNestedOneWithoutGiveawaysInput;
    prize?: Prisma.PrizeCreateNestedOneWithoutGiveawayInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayUncheckedCreateWithoutOrdersInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    categoryId?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prize?: Prisma.PrizeUncheckedCreateNestedOneWithoutGiveawayInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerUncheckedCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawUncheckedCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayCreateOrConnectWithoutOrdersInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutOrdersInput, Prisma.GiveawayUncheckedCreateWithoutOrdersInput>;
};
export type GiveawayUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.GiveawayUpdateWithoutOrdersInput, Prisma.GiveawayUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutOrdersInput, Prisma.GiveawayUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.GiveawayWhereInput;
};
export type GiveawayUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.GiveawayWhereInput;
    data: Prisma.XOR<Prisma.GiveawayUpdateWithoutOrdersInput, Prisma.GiveawayUncheckedUpdateWithoutOrdersInput>;
};
export type GiveawayUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutGiveawaysNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutGiveawaysNestedInput;
    prize?: Prisma.PrizeUpdateOneWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prize?: Prisma.PrizeUncheckedUpdateOneWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUncheckedUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUncheckedUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayCreateWithoutTicketsInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutGiveawaysInput;
    creator: Prisma.UserCreateNestedOneWithoutGiveawaysInput;
    prize?: Prisma.PrizeCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayUncheckedCreateWithoutTicketsInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    categoryId?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prize?: Prisma.PrizeUncheckedCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerUncheckedCreateNestedOneWithoutGiveawayInput;
    draws?: Prisma.DrawUncheckedCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayCreateOrConnectWithoutTicketsInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutTicketsInput, Prisma.GiveawayUncheckedCreateWithoutTicketsInput>;
};
export type GiveawayUpsertWithoutTicketsInput = {
    update: Prisma.XOR<Prisma.GiveawayUpdateWithoutTicketsInput, Prisma.GiveawayUncheckedUpdateWithoutTicketsInput>;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutTicketsInput, Prisma.GiveawayUncheckedCreateWithoutTicketsInput>;
    where?: Prisma.GiveawayWhereInput;
};
export type GiveawayUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Prisma.GiveawayWhereInput;
    data: Prisma.XOR<Prisma.GiveawayUpdateWithoutTicketsInput, Prisma.GiveawayUncheckedUpdateWithoutTicketsInput>;
};
export type GiveawayUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutGiveawaysNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutGiveawaysNestedInput;
    prize?: Prisma.PrizeUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prize?: Prisma.PrizeUncheckedUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUncheckedUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUncheckedUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayCreateWithoutWinnerInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutGiveawaysInput;
    creator: Prisma.UserCreateNestedOneWithoutGiveawaysInput;
    prize?: Prisma.PrizeCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutGiveawayInput;
    draws?: Prisma.DrawCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayUncheckedCreateWithoutWinnerInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    categoryId?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prize?: Prisma.PrizeUncheckedCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutGiveawayInput;
    draws?: Prisma.DrawUncheckedCreateNestedManyWithoutGiveawayInput;
};
export type GiveawayCreateOrConnectWithoutWinnerInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutWinnerInput, Prisma.GiveawayUncheckedCreateWithoutWinnerInput>;
};
export type GiveawayUpsertWithoutWinnerInput = {
    update: Prisma.XOR<Prisma.GiveawayUpdateWithoutWinnerInput, Prisma.GiveawayUncheckedUpdateWithoutWinnerInput>;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutWinnerInput, Prisma.GiveawayUncheckedCreateWithoutWinnerInput>;
    where?: Prisma.GiveawayWhereInput;
};
export type GiveawayUpdateToOneWithWhereWithoutWinnerInput = {
    where?: Prisma.GiveawayWhereInput;
    data: Prisma.XOR<Prisma.GiveawayUpdateWithoutWinnerInput, Prisma.GiveawayUncheckedUpdateWithoutWinnerInput>;
};
export type GiveawayUpdateWithoutWinnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutGiveawaysNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutGiveawaysNestedInput;
    prize?: Prisma.PrizeUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateWithoutWinnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prize?: Prisma.PrizeUncheckedUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUncheckedUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayCreateWithoutDrawsInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutGiveawaysInput;
    creator: Prisma.UserCreateNestedOneWithoutGiveawaysInput;
    prize?: Prisma.PrizeCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerCreateNestedOneWithoutGiveawayInput;
};
export type GiveawayUncheckedCreateWithoutDrawsInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    categoryId?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prize?: Prisma.PrizeUncheckedCreateNestedOneWithoutGiveawayInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutGiveawayInput;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutGiveawayInput;
    winner?: Prisma.WinnerUncheckedCreateNestedOneWithoutGiveawayInput;
};
export type GiveawayCreateOrConnectWithoutDrawsInput = {
    where: Prisma.GiveawayWhereUniqueInput;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutDrawsInput, Prisma.GiveawayUncheckedCreateWithoutDrawsInput>;
};
export type GiveawayUpsertWithoutDrawsInput = {
    update: Prisma.XOR<Prisma.GiveawayUpdateWithoutDrawsInput, Prisma.GiveawayUncheckedUpdateWithoutDrawsInput>;
    create: Prisma.XOR<Prisma.GiveawayCreateWithoutDrawsInput, Prisma.GiveawayUncheckedCreateWithoutDrawsInput>;
    where?: Prisma.GiveawayWhereInput;
};
export type GiveawayUpdateToOneWithWhereWithoutDrawsInput = {
    where?: Prisma.GiveawayWhereInput;
    data: Prisma.XOR<Prisma.GiveawayUpdateWithoutDrawsInput, Prisma.GiveawayUncheckedUpdateWithoutDrawsInput>;
};
export type GiveawayUpdateWithoutDrawsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutGiveawaysNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutGiveawaysNestedInput;
    prize?: Prisma.PrizeUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUpdateOneWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateWithoutDrawsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prize?: Prisma.PrizeUncheckedUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUncheckedUpdateOneWithoutGiveawayNestedInput;
};
export type GiveawayCreateManyCreatorInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GiveawayUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutGiveawaysNestedInput;
    prize?: Prisma.PrizeUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prize?: Prisma.PrizeUncheckedUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUncheckedUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUncheckedUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GiveawayCreateManyCategoryInput = {
    id?: string;
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    status?: $Enums.GiveawayStatus;
    entryPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    maximumEntries: number;
    entriesSold?: number;
    maximumEntriesPerUser: number;
    minimumEntriesPerPurchase?: number;
    startDate: Date | string;
    endDate: Date | string;
    featured?: boolean;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GiveawayUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutGiveawaysNestedInput;
    prize?: Prisma.PrizeUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prize?: Prisma.PrizeUncheckedUpdateOneWithoutGiveawayNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutGiveawayNestedInput;
    tickets?: Prisma.TicketUncheckedUpdateManyWithoutGiveawayNestedInput;
    winner?: Prisma.WinnerUncheckedUpdateOneWithoutGiveawayNestedInput;
    draws?: Prisma.DrawUncheckedUpdateManyWithoutGiveawayNestedInput;
};
export type GiveawayUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGiveawayStatusFieldUpdateOperationsInput | $Enums.GiveawayStatus;
    entryPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    maximumEntries?: Prisma.IntFieldUpdateOperationsInput | number;
    entriesSold?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumEntriesPerUser?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumEntriesPerPurchase?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type GiveawayCountOutputType
 */
export type GiveawayCountOutputType = {
    orders: number;
    tickets: number;
    draws: number;
};
export type GiveawayCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | GiveawayCountOutputTypeCountOrdersArgs;
    tickets?: boolean | GiveawayCountOutputTypeCountTicketsArgs;
    draws?: boolean | GiveawayCountOutputTypeCountDrawsArgs;
};
/**
 * GiveawayCountOutputType without action
 */
export type GiveawayCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiveawayCountOutputType
     */
    select?: Prisma.GiveawayCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * GiveawayCountOutputType without action
 */
export type GiveawayCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
/**
 * GiveawayCountOutputType without action
 */
export type GiveawayCountOutputTypeCountTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TicketWhereInput;
};
/**
 * GiveawayCountOutputType without action
 */
export type GiveawayCountOutputTypeCountDrawsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DrawWhereInput;
};
export type GiveawaySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    status?: boolean;
    entryPrice?: boolean;
    currency?: boolean;
    maximumEntries?: boolean;
    entriesSold?: boolean;
    maximumEntriesPerUser?: boolean;
    minimumEntriesPerPurchase?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    featured?: boolean;
    categoryId?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.Giveaway$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prize?: boolean | Prisma.Giveaway$prizeArgs<ExtArgs>;
    orders?: boolean | Prisma.Giveaway$ordersArgs<ExtArgs>;
    tickets?: boolean | Prisma.Giveaway$ticketsArgs<ExtArgs>;
    winner?: boolean | Prisma.Giveaway$winnerArgs<ExtArgs>;
    draws?: boolean | Prisma.Giveaway$drawsArgs<ExtArgs>;
    _count?: boolean | Prisma.GiveawayCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["giveaway"]>;
export type GiveawaySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    status?: boolean;
    entryPrice?: boolean;
    currency?: boolean;
    maximumEntries?: boolean;
    entriesSold?: boolean;
    maximumEntriesPerUser?: boolean;
    minimumEntriesPerPurchase?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    featured?: boolean;
    categoryId?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.Giveaway$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["giveaway"]>;
export type GiveawaySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    status?: boolean;
    entryPrice?: boolean;
    currency?: boolean;
    maximumEntries?: boolean;
    entriesSold?: boolean;
    maximumEntriesPerUser?: boolean;
    minimumEntriesPerPurchase?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    featured?: boolean;
    categoryId?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.Giveaway$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["giveaway"]>;
export type GiveawaySelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    status?: boolean;
    entryPrice?: boolean;
    currency?: boolean;
    maximumEntries?: boolean;
    entriesSold?: boolean;
    maximumEntriesPerUser?: boolean;
    minimumEntriesPerPurchase?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    featured?: boolean;
    categoryId?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GiveawayOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "shortDescription" | "description" | "status" | "entryPrice" | "currency" | "maximumEntries" | "entriesSold" | "maximumEntriesPerUser" | "minimumEntriesPerPurchase" | "startDate" | "endDate" | "featured" | "categoryId" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["giveaway"]>;
export type GiveawayInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Giveaway$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    prize?: boolean | Prisma.Giveaway$prizeArgs<ExtArgs>;
    orders?: boolean | Prisma.Giveaway$ordersArgs<ExtArgs>;
    tickets?: boolean | Prisma.Giveaway$ticketsArgs<ExtArgs>;
    winner?: boolean | Prisma.Giveaway$winnerArgs<ExtArgs>;
    draws?: boolean | Prisma.Giveaway$drawsArgs<ExtArgs>;
    _count?: boolean | Prisma.GiveawayCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GiveawayIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Giveaway$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type GiveawayIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Giveaway$categoryArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $GiveawayPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Giveaway";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        creator: Prisma.$UserPayload<ExtArgs>;
        prize: Prisma.$PrizePayload<ExtArgs> | null;
        orders: Prisma.$OrderPayload<ExtArgs>[];
        tickets: Prisma.$TicketPayload<ExtArgs>[];
        winner: Prisma.$WinnerPayload<ExtArgs> | null;
        draws: Prisma.$DrawPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        slug: string;
        shortDescription: string;
        description: string;
        status: $Enums.GiveawayStatus;
        entryPrice: runtime.Decimal;
        currency: string;
        maximumEntries: number;
        entriesSold: number;
        maximumEntriesPerUser: number;
        minimumEntriesPerPurchase: number;
        startDate: Date;
        endDate: Date;
        featured: boolean;
        categoryId: string | null;
        createdBy: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["giveaway"]>;
    composites: {};
};
export type GiveawayGetPayload<S extends boolean | null | undefined | GiveawayDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GiveawayPayload, S>;
export type GiveawayCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GiveawayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GiveawayCountAggregateInputType | true;
};
export interface GiveawayDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Giveaway'];
        meta: {
            name: 'Giveaway';
        };
    };
    /**
     * Find zero or one Giveaway that matches the filter.
     * @param {GiveawayFindUniqueArgs} args - Arguments to find a Giveaway
     * @example
     * // Get one Giveaway
     * const giveaway = await prisma.giveaway.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiveawayFindUniqueArgs>(args: Prisma.SelectSubset<T, GiveawayFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Giveaway that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiveawayFindUniqueOrThrowArgs} args - Arguments to find a Giveaway
     * @example
     * // Get one Giveaway
     * const giveaway = await prisma.giveaway.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiveawayFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GiveawayFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Giveaway that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiveawayFindFirstArgs} args - Arguments to find a Giveaway
     * @example
     * // Get one Giveaway
     * const giveaway = await prisma.giveaway.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiveawayFindFirstArgs>(args?: Prisma.SelectSubset<T, GiveawayFindFirstArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Giveaway that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiveawayFindFirstOrThrowArgs} args - Arguments to find a Giveaway
     * @example
     * // Get one Giveaway
     * const giveaway = await prisma.giveaway.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiveawayFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GiveawayFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Giveaways that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiveawayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Giveaways
     * const giveaways = await prisma.giveaway.findMany()
     *
     * // Get first 10 Giveaways
     * const giveaways = await prisma.giveaway.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const giveawayWithIdOnly = await prisma.giveaway.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GiveawayFindManyArgs>(args?: Prisma.SelectSubset<T, GiveawayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Giveaway.
     * @param {GiveawayCreateArgs} args - Arguments to create a Giveaway.
     * @example
     * // Create one Giveaway
     * const Giveaway = await prisma.giveaway.create({
     *   data: {
     *     // ... data to create a Giveaway
     *   }
     * })
     *
     */
    create<T extends GiveawayCreateArgs>(args: Prisma.SelectSubset<T, GiveawayCreateArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Giveaways.
     * @param {GiveawayCreateManyArgs} args - Arguments to create many Giveaways.
     * @example
     * // Create many Giveaways
     * const giveaway = await prisma.giveaway.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GiveawayCreateManyArgs>(args?: Prisma.SelectSubset<T, GiveawayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Giveaways and returns the data saved in the database.
     * @param {GiveawayCreateManyAndReturnArgs} args - Arguments to create many Giveaways.
     * @example
     * // Create many Giveaways
     * const giveaway = await prisma.giveaway.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Giveaways and only return the `id`
     * const giveawayWithIdOnly = await prisma.giveaway.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GiveawayCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GiveawayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Giveaway.
     * @param {GiveawayDeleteArgs} args - Arguments to delete one Giveaway.
     * @example
     * // Delete one Giveaway
     * const Giveaway = await prisma.giveaway.delete({
     *   where: {
     *     // ... filter to delete one Giveaway
     *   }
     * })
     *
     */
    delete<T extends GiveawayDeleteArgs>(args: Prisma.SelectSubset<T, GiveawayDeleteArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Giveaway.
     * @param {GiveawayUpdateArgs} args - Arguments to update one Giveaway.
     * @example
     * // Update one Giveaway
     * const giveaway = await prisma.giveaway.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GiveawayUpdateArgs>(args: Prisma.SelectSubset<T, GiveawayUpdateArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Giveaways.
     * @param {GiveawayDeleteManyArgs} args - Arguments to filter Giveaways to delete.
     * @example
     * // Delete a few Giveaways
     * const { count } = await prisma.giveaway.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GiveawayDeleteManyArgs>(args?: Prisma.SelectSubset<T, GiveawayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Giveaways.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiveawayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Giveaways
     * const giveaway = await prisma.giveaway.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GiveawayUpdateManyArgs>(args: Prisma.SelectSubset<T, GiveawayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Giveaways and returns the data updated in the database.
     * @param {GiveawayUpdateManyAndReturnArgs} args - Arguments to update many Giveaways.
     * @example
     * // Update many Giveaways
     * const giveaway = await prisma.giveaway.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Giveaways and only return the `id`
     * const giveawayWithIdOnly = await prisma.giveaway.updateManyAndReturn({
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
    updateManyAndReturn<T extends GiveawayUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GiveawayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Giveaway.
     * @param {GiveawayUpsertArgs} args - Arguments to update or create a Giveaway.
     * @example
     * // Update or create a Giveaway
     * const giveaway = await prisma.giveaway.upsert({
     *   create: {
     *     // ... data to create a Giveaway
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Giveaway we want to update
     *   }
     * })
     */
    upsert<T extends GiveawayUpsertArgs>(args: Prisma.SelectSubset<T, GiveawayUpsertArgs<ExtArgs>>): Prisma.Prisma__GiveawayClient<runtime.Types.Result.GetResult<Prisma.$GiveawayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Giveaways.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiveawayCountArgs} args - Arguments to filter Giveaways to count.
     * @example
     * // Count the number of Giveaways
     * const count = await prisma.giveaway.count({
     *   where: {
     *     // ... the filter for the Giveaways we want to count
     *   }
     * })
    **/
    count<T extends GiveawayCountArgs>(args?: Prisma.Subset<T, GiveawayCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GiveawayCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Giveaway.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiveawayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GiveawayAggregateArgs>(args: Prisma.Subset<T, GiveawayAggregateArgs>): Prisma.PrismaPromise<GetGiveawayAggregateType<T>>;
    /**
     * Group by Giveaway.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiveawayGroupByArgs} args - Group by arguments.
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
    groupBy<T extends GiveawayGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GiveawayGroupByArgs['orderBy'];
    } : {
        orderBy?: GiveawayGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GiveawayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiveawayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Giveaway model
     */
    readonly fields: GiveawayFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Giveaway.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GiveawayClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.Giveaway$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Giveaway$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    prize<T extends Prisma.Giveaway$prizeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Giveaway$prizeArgs<ExtArgs>>): Prisma.Prisma__PrizeClient<runtime.Types.Result.GetResult<Prisma.$PrizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.Giveaway$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Giveaway$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tickets<T extends Prisma.Giveaway$ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Giveaway$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    winner<T extends Prisma.Giveaway$winnerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Giveaway$winnerArgs<ExtArgs>>): Prisma.Prisma__WinnerClient<runtime.Types.Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    draws<T extends Prisma.Giveaway$drawsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Giveaway$drawsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Giveaway model
 */
export interface GiveawayFieldRefs {
    readonly id: Prisma.FieldRef<"Giveaway", 'String'>;
    readonly title: Prisma.FieldRef<"Giveaway", 'String'>;
    readonly slug: Prisma.FieldRef<"Giveaway", 'String'>;
    readonly shortDescription: Prisma.FieldRef<"Giveaway", 'String'>;
    readonly description: Prisma.FieldRef<"Giveaway", 'String'>;
    readonly status: Prisma.FieldRef<"Giveaway", 'GiveawayStatus'>;
    readonly entryPrice: Prisma.FieldRef<"Giveaway", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Giveaway", 'String'>;
    readonly maximumEntries: Prisma.FieldRef<"Giveaway", 'Int'>;
    readonly entriesSold: Prisma.FieldRef<"Giveaway", 'Int'>;
    readonly maximumEntriesPerUser: Prisma.FieldRef<"Giveaway", 'Int'>;
    readonly minimumEntriesPerPurchase: Prisma.FieldRef<"Giveaway", 'Int'>;
    readonly startDate: Prisma.FieldRef<"Giveaway", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Giveaway", 'DateTime'>;
    readonly featured: Prisma.FieldRef<"Giveaway", 'Boolean'>;
    readonly categoryId: Prisma.FieldRef<"Giveaway", 'String'>;
    readonly createdBy: Prisma.FieldRef<"Giveaway", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Giveaway", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Giveaway", 'DateTime'>;
}
/**
 * Giveaway findUnique
 */
export type GiveawayFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
    /**
     * Filter, which Giveaway to fetch.
     */
    where: Prisma.GiveawayWhereUniqueInput;
};
/**
 * Giveaway findUniqueOrThrow
 */
export type GiveawayFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
    /**
     * Filter, which Giveaway to fetch.
     */
    where: Prisma.GiveawayWhereUniqueInput;
};
/**
 * Giveaway findFirst
 */
export type GiveawayFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
    /**
     * Filter, which Giveaway to fetch.
     */
    where?: Prisma.GiveawayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Giveaways to fetch.
     */
    orderBy?: Prisma.GiveawayOrderByWithRelationInput | Prisma.GiveawayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Giveaways.
     */
    cursor?: Prisma.GiveawayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Giveaways from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Giveaways.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Giveaways.
     */
    distinct?: Prisma.GiveawayScalarFieldEnum | Prisma.GiveawayScalarFieldEnum[];
};
/**
 * Giveaway findFirstOrThrow
 */
export type GiveawayFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
    /**
     * Filter, which Giveaway to fetch.
     */
    where?: Prisma.GiveawayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Giveaways to fetch.
     */
    orderBy?: Prisma.GiveawayOrderByWithRelationInput | Prisma.GiveawayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Giveaways.
     */
    cursor?: Prisma.GiveawayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Giveaways from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Giveaways.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Giveaways.
     */
    distinct?: Prisma.GiveawayScalarFieldEnum | Prisma.GiveawayScalarFieldEnum[];
};
/**
 * Giveaway findMany
 */
export type GiveawayFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
    /**
     * Filter, which Giveaways to fetch.
     */
    where?: Prisma.GiveawayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Giveaways to fetch.
     */
    orderBy?: Prisma.GiveawayOrderByWithRelationInput | Prisma.GiveawayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Giveaways.
     */
    cursor?: Prisma.GiveawayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Giveaways from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Giveaways.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Giveaways.
     */
    distinct?: Prisma.GiveawayScalarFieldEnum | Prisma.GiveawayScalarFieldEnum[];
};
/**
 * Giveaway create
 */
export type GiveawayCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
    /**
     * The data needed to create a Giveaway.
     */
    data: Prisma.XOR<Prisma.GiveawayCreateInput, Prisma.GiveawayUncheckedCreateInput>;
};
/**
 * Giveaway createMany
 */
export type GiveawayCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Giveaways.
     */
    data: Prisma.GiveawayCreateManyInput | Prisma.GiveawayCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Giveaway createManyAndReturn
 */
export type GiveawayCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * The data used to create many Giveaways.
     */
    data: Prisma.GiveawayCreateManyInput | Prisma.GiveawayCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Giveaway update
 */
export type GiveawayUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
    /**
     * The data needed to update a Giveaway.
     */
    data: Prisma.XOR<Prisma.GiveawayUpdateInput, Prisma.GiveawayUncheckedUpdateInput>;
    /**
     * Choose, which Giveaway to update.
     */
    where: Prisma.GiveawayWhereUniqueInput;
};
/**
 * Giveaway updateMany
 */
export type GiveawayUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Giveaways.
     */
    data: Prisma.XOR<Prisma.GiveawayUpdateManyMutationInput, Prisma.GiveawayUncheckedUpdateManyInput>;
    /**
     * Filter which Giveaways to update
     */
    where?: Prisma.GiveawayWhereInput;
    /**
     * Limit how many Giveaways to update.
     */
    limit?: number;
};
/**
 * Giveaway updateManyAndReturn
 */
export type GiveawayUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * The data used to update Giveaways.
     */
    data: Prisma.XOR<Prisma.GiveawayUpdateManyMutationInput, Prisma.GiveawayUncheckedUpdateManyInput>;
    /**
     * Filter which Giveaways to update
     */
    where?: Prisma.GiveawayWhereInput;
    /**
     * Limit how many Giveaways to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Giveaway upsert
 */
export type GiveawayUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
    /**
     * The filter to search for the Giveaway to update in case it exists.
     */
    where: Prisma.GiveawayWhereUniqueInput;
    /**
     * In case the Giveaway found by the `where` argument doesn't exist, create a new Giveaway with this data.
     */
    create: Prisma.XOR<Prisma.GiveawayCreateInput, Prisma.GiveawayUncheckedCreateInput>;
    /**
     * In case the Giveaway was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.GiveawayUpdateInput, Prisma.GiveawayUncheckedUpdateInput>;
};
/**
 * Giveaway delete
 */
export type GiveawayDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
    /**
     * Filter which Giveaway to delete.
     */
    where: Prisma.GiveawayWhereUniqueInput;
};
/**
 * Giveaway deleteMany
 */
export type GiveawayDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Giveaways to delete
     */
    where?: Prisma.GiveawayWhereInput;
    /**
     * Limit how many Giveaways to delete.
     */
    limit?: number;
};
/**
 * Giveaway.category
 */
export type Giveaway$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: Prisma.CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
/**
 * Giveaway.prize
 */
export type Giveaway$prizeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.PrizeWhereInput;
};
/**
 * Giveaway.orders
 */
export type Giveaway$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Giveaway.tickets
 */
export type Giveaway$ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: Prisma.TicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ticket
     */
    omit?: Prisma.TicketOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TicketInclude<ExtArgs> | null;
    where?: Prisma.TicketWhereInput;
    orderBy?: Prisma.TicketOrderByWithRelationInput | Prisma.TicketOrderByWithRelationInput[];
    cursor?: Prisma.TicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
/**
 * Giveaway.winner
 */
export type Giveaway$winnerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Giveaway.draws
 */
export type Giveaway$drawsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.DrawWhereInput;
    orderBy?: Prisma.DrawOrderByWithRelationInput | Prisma.DrawOrderByWithRelationInput[];
    cursor?: Prisma.DrawWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DrawScalarFieldEnum | Prisma.DrawScalarFieldEnum[];
};
/**
 * Giveaway without action
 */
export type GiveawayDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Giveaway
     */
    select?: Prisma.GiveawaySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Giveaway
     */
    omit?: Prisma.GiveawayOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GiveawayInclude<ExtArgs> | null;
};
//# sourceMappingURL=Giveaway.d.ts.map