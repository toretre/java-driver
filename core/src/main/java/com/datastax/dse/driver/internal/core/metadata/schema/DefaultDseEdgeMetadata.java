/*
 * Copyright DataStax, Inc.
 *
 * This software can be used solely with DataStax Enterprise. Please consult the license at
 * http://www.datastax.com/terms/datastax-dse-driver-license-terms
 */
package com.datastax.dse.driver.internal.core.metadata.schema;

import com.datastax.dse.driver.api.core.metadata.schema.DseEdgeMetadata;
import com.datastax.oss.driver.api.core.CqlIdentifier;
import com.datastax.oss.driver.shaded.guava.common.base.Preconditions;
import edu.umd.cs.findbugs.annotations.NonNull;
import java.util.List;
import java.util.Objects;

public class DefaultDseEdgeMetadata implements DseEdgeMetadata {

  @NonNull private final CqlIdentifier labelName;

  @NonNull private final CqlIdentifier fromTable;
  @NonNull private final CqlIdentifier fromLabel;
  @NonNull private final List<CqlIdentifier> fromPartitionKeyColumns;
  @NonNull private final List<CqlIdentifier> fromClusteringColumns;

  @NonNull private final CqlIdentifier toTable;
  @NonNull private final CqlIdentifier toLabel;
  @NonNull private final List<CqlIdentifier> toPartitionKeyColumns;
  @NonNull private final List<CqlIdentifier> toClusteringColumns;

  public DefaultDseEdgeMetadata(
      @NonNull CqlIdentifier labelName,
      @NonNull CqlIdentifier fromTable,
      @NonNull CqlIdentifier fromLabel,
      @NonNull List<CqlIdentifier> fromPartitionKeyColumns,
      @NonNull List<CqlIdentifier> fromClusteringColumns,
      @NonNull CqlIdentifier toTable,
      @NonNull CqlIdentifier toLabel,
      @NonNull List<CqlIdentifier> toPartitionKeyColumns,
      @NonNull List<CqlIdentifier> toClusteringColumns) {
    this.labelName = Preconditions.checkNotNull(labelName);
    this.fromTable = Preconditions.checkNotNull(fromTable);
    this.fromLabel = Preconditions.checkNotNull(fromLabel);
    this.fromPartitionKeyColumns = Preconditions.checkNotNull(fromPartitionKeyColumns);
    this.fromClusteringColumns = Preconditions.checkNotNull(fromClusteringColumns);
    this.toTable = Preconditions.checkNotNull(toTable);
    this.toLabel = Preconditions.checkNotNull(toLabel);
    this.toPartitionKeyColumns = Preconditions.checkNotNull(toPartitionKeyColumns);
    this.toClusteringColumns = Preconditions.checkNotNull(toClusteringColumns);
  }

  @NonNull
  @Override
  public CqlIdentifier getLabelName() {
    return labelName;
  }

  @NonNull
  @Override
  public CqlIdentifier getFromTable() {
    return fromTable;
  }

  @NonNull
  @Override
  public CqlIdentifier getFromLabel() {
    return fromLabel;
  }

  @NonNull
  @Override
  public List<CqlIdentifier> getFromPartitionKeyColumns() {
    return fromPartitionKeyColumns;
  }

  @NonNull
  @Override
  public List<CqlIdentifier> getFromClusteringColumns() {
    return fromClusteringColumns;
  }

  @NonNull
  @Override
  public CqlIdentifier getToTable() {
    return toTable;
  }

  @NonNull
  @Override
  public CqlIdentifier getToLabel() {
    return toLabel;
  }

  @NonNull
  @Override
  public List<CqlIdentifier> getToPartitionKeyColumns() {
    return toPartitionKeyColumns;
  }

  @NonNull
  @Override
  public List<CqlIdentifier> getToClusteringColumns() {
    return toClusteringColumns;
  }

  @Override
  public boolean equals(Object other) {
    if (other == this) {
      return true;
    } else if (other instanceof DseEdgeMetadata) {
      DseEdgeMetadata that = (DseEdgeMetadata) other;
      return Objects.equals(this.labelName, that.getLabelName())
          && Objects.equals(this.fromTable, that.getFromTable())
          && Objects.equals(this.fromLabel, that.getFromLabel())
          && Objects.equals(this.fromPartitionKeyColumns, that.getFromPartitionKeyColumns())
          && Objects.equals(this.fromClusteringColumns, that.getFromClusteringColumns())
          && Objects.equals(this.toTable, that.getToTable())
          && Objects.equals(this.toLabel, that.getToLabel())
          && Objects.equals(this.toPartitionKeyColumns, that.getToPartitionKeyColumns())
          && Objects.equals(this.toClusteringColumns, that.getToClusteringColumns());
    } else {
      return false;
    }
  }

  @Override
  public int hashCode() {
    return Objects.hash(
        labelName,
        fromTable,
        fromLabel,
        fromPartitionKeyColumns,
        fromClusteringColumns,
        toTable,
        toLabel,
        toPartitionKeyColumns,
        toClusteringColumns);
  }
}
