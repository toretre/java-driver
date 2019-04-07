/*
 * Copyright DataStax, Inc.
 *
 * This software can be used solely with DataStax Enterprise. Please consult the license at
 * http://www.datastax.com/terms/datastax-dse-driver-license-terms
 */
package com.datastax.dse.driver.api.core.metadata.schema;

import com.datastax.oss.driver.api.core.CqlIdentifier;
import edu.umd.cs.findbugs.annotations.NonNull;
import java.util.List;

/** Edge metadata, for a table that was created with CREATE TABLE ... WITH EDGE LABEL. */
public interface DseEdgeMetadata {

  /** The label of the edge in graph. */
  @NonNull
  CqlIdentifier getLabelName();

  /** The identifier of the table representing the incoming vertex. */
  @NonNull
  CqlIdentifier getFromTable();

  /** The label of the incoming vertex in graph. */
  @NonNull
  CqlIdentifier getFromLabel();

  /** The columns in this table that match the partition key of the incoming vertex table. */
  @NonNull
  List<CqlIdentifier> getFromPartitionKeyColumns();

  /** The columns in this table that match the clustering columns of the incoming vertex table. */
  @NonNull
  List<CqlIdentifier> getFromClusteringColumns();

  /** The identifier of the table representing the outgoing vertex. */
  @NonNull
  CqlIdentifier getToTable();

  /** The label of the outgoing vertex in graph. */
  @NonNull
  CqlIdentifier getToLabel();

  /** The columns in this table that match the partition key of the outgoing vertex table. */
  @NonNull
  List<CqlIdentifier> getToPartitionKeyColumns();

  /** The columns in this table that match the clustering columns of the outgoing vertex table. */
  @NonNull
  List<CqlIdentifier> getToClusteringColumns();
}
